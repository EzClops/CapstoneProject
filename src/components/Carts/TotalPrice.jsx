import { useEffect, useState } from "react";
import { getItem } from "../../API/apiCalls"


const userCartId = 1;

export default function TotalPrice({ loading, setLoading}){

    let cartItems = []
    if(JSON.parse(localStorage.getItem(`All_Products_In_User_Cart${userCartId}`)) !== null){
        cartItems = JSON.parse(localStorage.getItem(`All_Products_In_User_Cart${userCartId}`))
    }
    if(cartItems !== null){
        cartItems.shift()

    }
    const [itemPriceWithQuantity, setItemPriceWIthQuantity] = useState(0)
    console.log(cartItems)
    
    useEffect(() =>{
        const totalPrice = cartItems.reduce((accumulator, currentItem) => {
            multiplyQuantityOfProduct(currentItem)
            accumulator += JSON.parse(localStorage.getItem(`ProductTotalPrice_${currentItem["productId"]}`))
            
            return accumulator
        },0)
        setItemPriceWIthQuantity(totalPrice)
        localStorage.setItem('TotalPrice', totalPrice)
        setLoading(false)
    },[loading])

    async function multiplyQuantityOfProduct(currentItem){
        
        const itemDescription = await getItem(currentItem["productId"])
        const price = itemDescription["price"] * currentItem["quantity"]
        
        localStorage.setItem(`ProductTotalPrice_${currentItem["productId"]}`, price)

    }
    
    return(
        <>
            <hr></hr>
            {loading ? "" : <p>Total: ${localStorage.getItem('TotalPrice')}</p>}
            
        </>
    )
}