import { getUserCart, getAllUsers, getItem } from "../API/apiCalls";
import { useState, useEffect } from "react";
import moment from "moment";
import CartItem from "./CartItem";

export default function Cart({ item, setItem, setCartPage }){

    const [product, setProduct] = useState([]);
    const [total, setTotal] = useState(0);
    const [count , setCount] = useState(0)
    const [date, setDate] = useState(null)
    // setCartPage(true)
    // Grab desired users cart and stores the product and quantity in product state
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
        fetUserProduct(count, 1)
    }, [])

    return(
        <>
            <header className="header">
                <h2>Shopping Cart</h2>
            </header>
            <div className="userCart">
                {
                    product.map(i =>{
                        return(
                            <CartItem productId={i["productId"]} quantity={i["quantity"]} item={item} setItem={setItem} total={total} setTotal={setTotal}/>
                        )
                    }) 
                }
                
            </div>
        </>
    )
}