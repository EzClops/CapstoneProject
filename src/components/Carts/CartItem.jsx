import { getItem } from "../../API/apiCalls"
import { useEffect, useState } from "react"
import { addQuantity, reduceQuantity, removeItemFromCart } from "../GetFunctions/UpdateCart"

export default function CartItem({ productId, quantity, set_Quantity_User_Cart, checkoutPage, setLoading, total, setTotal}){
    const [item2, setItem2] = useState("")
    const [cartQuantity, setCartQuantity] = useState(quantity)
    
    const userCartId = 1;
    
    useEffect(()=>{
        async function fetchItem(){
            const data = await getItem(productId);
            console.log("run")
            setItem2(data)
            if(!JSON.parse(localStorage.getItem(`All_Products_In_User_Cart${userCartId}`)))
            set_Quantity_User_Cart(JSON.parse(localStorage.getItem(`All_Products_In_User_Cart${userCartId}`)).length)           
        }
        fetchItem([cartQuantity])
    },[cartQuantity])
    // console.log("fake total", total.current)
    console.log("CartQuantity", JSON.parse(localStorage.getItem(`All_Products_In_User_Cart${userCartId}`)).length)
    
    return (
        <>  
            {JSON.parse(localStorage.getItem(`All_Products_In_User_Cart${userCartId}`)).length === 0 ? ""  : 
                (<>
                    <hr></hr>

                    <div className={"containerCart" + (!checkoutPage ? "" : " containerCartCheckout")}>
                        <div className="cartImage">
                            <div className="image">
                                <img src={item2?.image} alt="pictar" height="150px" width="150px"/>
                            </div>
                        </div>
                        <div className="cartItem">
                            <div className="title">
                                {!localStorage.getItem("isCheckoutPage") 
                                ? <p>{item2?.title}, {item2?.description}</p> 
                                : <p>{item2?.title}</p>}
                                <p>${item2?.price}</p>
                            </div>
                            <div className="quantity">
                                <button className="Cart_Reduce_Quantity" onClick={() => {
                                    if(JSON.parse(localStorage.getItem(`productId:${productId}[${userCartId}]`)) === null){
                                        removeItemFromCart(productId)
                                    }
                                    setTotal(current => current - item2["price"])
                                    localStorage.setItem('TotalPrice', JSON.stringify(total))
                                    reduceQuantity(productId)
                                    setCartQuantity(JSON.parse(localStorage.getItem(`productId:${productId}[${userCartId}]`)))
                                    setLoading(true)
                                    if(JSON.parse(localStorage.getItem(`All_Products_In_User_Cart${userCartId}`)).length === 0){
                                        setTotal(0)
                                    }
                                    console.log("geeze", cartQuantity)
                                }}>-</button>
                                {cartQuantity === 0 ? "" : <p>{cartQuantity}</p>}
                                <button className="Cart_Add_Quantity" onClick={() => {
                                    console.log(typeof(item2["price"]))
                                    setTotal(current => current + item2["price"])
                                    localStorage.setItem('TotalPrice', JSON.stringify(total))
                                    addQuantity(productId)
                                    setCartQuantity(JSON.parse(localStorage.getItem(`productId:${productId}[${userCartId}]`)))
                                    setLoading(true)
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