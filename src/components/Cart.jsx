import { getUserCart, getAllCart } from "../API/apiCalls";
import { useState, useEffect } from "react";
import CartItem from "./CartItem";

export default function Cart({ product, setProduct, error }){

    const [count , setCount] = useState(0)
    const [total, setTotal] = useState(0);
    const [date, setDate] = useState(null)

    const userCartId = 1;

    // setCartPage(true)
    // Grab desired users cart and stores the product and quantity in product state
    useEffect(() => {
        async function fetUserProduct(userId){
            try{
                const data = await getUserCart(userId)
                const productsInCart = await data["0"]["products"]
                setProduct(productsInCart)
                
            }catch(error){
                console.error(error.message)
                setProduct([])
            }
        }
        fetUserProduct(userCartId)
    }, [])

    // getAllCart()
    return(
        <>
            <header className="header">
                <h2>Shopping Cart</h2>
            </header>
            <div className="userCart">
                <span>{error && <p>{error}</p>}</span>
                {
                    !(sessionStorage.getItem("token")) 
                        ?   <p>Cart is Empty</p> 
                        :   product.map((values, key) =>{
                            return(
                                <CartItem key={key} productId={values["productId"]} quantity={values["quantity"]}/>
                            )})
                }
                
            </div>
        </>
    )
}