import { getItem } from "../API/apiCalls"
import { useEffect, useState } from "react"

export default function CartItem({ productId, quantity, item, setItem, total, setTotal}){
    const [item2, setItem2] = useState("")
    
    let num = 0;

    useEffect(()=>{
        async function fetchItem(){
            const data = await getItem(productId);
            // console.log(data)
            setItem2(data)
            
        }
        fetchItem()
        // console.log("Good day", nu)
    },[])
    // if(!isNaN(total)){
    //     console.log("Hi",total)
    //     setTotal(total + item2.price)

    // }
    // num = num + item2.price
    
    // console.log("Hi", item2)
    // console.log(total)
    // console.log(item)
    // setItem(item2)
    return (
        <>  
            <hr></hr>
            <div className="containerCart">
                <div className="cartImage">
                    <div className="image">
                        <img src={item2.image} alt="pictar" height="150px" width="150px"/>
                    </div>
                </div>
                <div className="cartItem">
                    <div className="title">
                        <p>{item2.title}, {item2.description}</p>
                        <p>${item2.price}</p>
                    </div>
                    <div className="quantity">
                        <p>quantity: {quantity}</p>
                    </div>
                </div>

            </div>
            <hr></hr>
            {/* {setPId(null)} */}
        </>
    )
}