import { useEffect, useRef, useState } from "react";
import { getItem } from "../../API/apiCalls"


const userCartId = 1;

export default function TotalPrice(){
    const [price_Of_Item_Multiplied_Quantity, setPrice_Of_Item_Multiplied_Quantity] = useState(0)
    const cartItems = JSON.parse(localStorage.getItem(`All_Products_In_User_Cart${userCartId}`))
    cartItems.shift()
    const [currentCartItems, setCurrentCartItems] = useState([])
    
    
    function multiplyQuantityOfProduct(currentItem){
        getItem(currentItem["productId"], currentItem["quantity"])
        let price = JSON.parse(localStorage.getItem("currentItem"))
        console.log("price", price)

        return price
    }

    const totalPrice = currentCartItems.reduce((accumulator, currentItem, index) => {
        console.log("bee", currentItem)
        accumulator += multiplyQuantityOfProduct(currentItem)
 
        return accumulator
    },0)
    
    useEffect(() =>{
        setPrice_Of_Item_Multiplied_Quantity(totalPrice)
    },[price_Of_Item_Multiplied_Quantity])

    console.log("gee", price_Of_Item_Multiplied_Quantity)
    return(
        <>
            <hr></hr>
            <p>Total: {totalPrice}</p>
        </>
    )
}