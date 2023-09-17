import { getItem } from "../API/apiCalls"
import { useEffect, useState } from "react"
import { updateInCart } from "../API/apiCalls"

export default function CartItem({ productId, quantity}){
    const [item2, setItem2] = useState("")
    // console.log(`productId${productId}`, quantity)
    useEffect(()=>{
        async function fetchItem(){
            const data = await getItem(productId);
            setItem2(data)
            
        }
        fetchItem()
    },[])
    // console.log("product", item2)
    return (
        <>  
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
                        <p>quantity: {quantity}</p>
                    </div>
                </div>
            </div>
            <hr></hr>
        </>
    )
}