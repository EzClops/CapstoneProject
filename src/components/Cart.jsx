import { getUserCart, getAllUsers, getItem } from "../API/apiCalls";
import { useState, useEffect } from "react";
import moment from "moment";
import CartItem from "./CartItem";

export default function Cart({ item, setItem, token, pId, setPId }){
    /*  
        -get the number of products in usercart within fetUserCartLength function
        -use that value to loop that number of times through object
        -start product count from 0 untill it is equal to or greater than num of products
    */
    const [product, setProduct] = useState([]);
    
    const [count , setCount] = useState(0)
    const [date, setDate] = useState(null)

    
    useEffect(() => {
        async function fetUserProduct(c, userId){
            try{
                const data = await getUserCart(userId)
                // if (data.length > 1){
                //     data.map(item =>{
                //         // console.log(date)
                //         if(date === null){
                //             const formatedDate = moment(`${item["date"]}`).utc().format('YYYY-MM-DD')
                //             setDate(formatedDate)
                //             console.log("Hi", date)
                //         }
                //     })
                // }
                // console.log(data["0"]["date"])
                const p = await data["0"]["products"]
                setProduct(p)
                
                
            }catch(error){
                console.error(error.message)
                setProduct([])
            }
        }
        fetUserProduct(count, 4)
    }, [])

    return(
        <>
            <div className="header">
                <h2>Cart</h2>
            </div>
            <div className="userCart">
                {product.map(i =>{
                    return(
                        <CartItem productId={i["productId"]} quantity={i["quantity"]} item={item} setItem={setItem}/>
                    )
                }) }
                
            </div>
        </>
    )
}