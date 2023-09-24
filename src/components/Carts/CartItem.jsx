import { getItem } from "../../API/apiCalls"
import { useEffect, useState } from "react"
import { updateInCart } from "../../API/apiCalls"
import { addQuantity, reduceQuantity, removeItemFromCart } from "../GetFunctions/LocalStorage"

export default function CartItem({ productId, quantity, set_Quantity_User_Cart}){
    const [item2, setItem2] = useState("")
    const [cartQuantity, setCartQuantity] = useState(quantity)
    const userCartId = 1;

    // console.log(`productId${productId}`, quantity)
    useEffect(()=>{
        async function fetchItem(){
            const data = await getItem(productId);
            console.log("run")
            setItem2(data)
            if(!JSON.parse(localStorage.getItem(`All_Products_In_User_Cart${userCartId}`)))
            set_Quantity_User_Cart(JSON.parse(localStorage.getItem(`All_Products_In_User_Cart${userCartId}`)).length)
            
        }
        fetchItem([cartQuantity])
    },[])
    // console.log("product", item2)
    // console.log("before", cartQuantity)
    console.log("CartQuantity", JSON.parse(localStorage.getItem(`All_Products_In_User_Cart${userCartId}`)).length)
    return (
        <>  
            {cartQuantity === null ? ""  : 
                (<>
                    <hr></hr>
                    <div className="containerCart">
                        <div className="cartImage">
                            <div className="image">
                                <img src={item2?.image} alt="pictar" height="150px" width="150px"/>
                            </div>
                        </div>
                        <div className="cartItem">
                            <div className="title">
                                <p>{item2?.title}, {item2?.description}</p>
                                <p>${item2?.price}</p>
                            </div>
                            <div className="quantity">
                                <button className="Cart_Reduce_Quantity" onClick={() => {
                                    if(JSON.parse(localStorage.getItem(`productId:${productId}[${userCartId}]`)) === null){
                                        removeItemFromCart(productId)
                                    }
                                    reduceQuantity(productId)
                                    setCartQuantity(JSON.parse(localStorage.getItem(`productId:${productId}[${userCartId}]`)))
                                    
                                    console.log(`Cart Quantity of ProductId:${productId}`, JSON.parse(localStorage.getItem(`productId:${productId}[${userCartId}]`)))
                                }}>-</button>
                                {/* <p>{cartQuantity}</p> */}
                                {cartQuantity === 0 ? removeItemFromCart(productId, setItem2) : <p>{cartQuantity}</p>}
                                <button className="Cart_Add_Quantity" onClick={() => {
                                    addQuantity(productId)
                                    setCartQuantity(JSON.parse(localStorage.getItem(`productId:${productId}[${userCartId}]`)))
                                    console.log(`Cart Quantity of ProductId:${productId}`, JSON.parse(localStorage.getItem(`productId:${productId}[${userCartId}]`)))
                                }}>+</button>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                </>)
                
            }
        </>
    )
}