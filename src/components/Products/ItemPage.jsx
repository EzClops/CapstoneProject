import Home from "../Navigation/Home";
import { Link } from "react-router-dom"
import { getClothing } from "../../API/apiCalls"
import { addQuantity, reduceQuantity } from "../GetFunctions/UpdateCart"
import AppContext from "../GetFunctions/AppContext";
import { useContext, useEffect } from "react";

export default function ItemPage(){
    const {item, items, setItems, homePage, setHomePage, total, setTotal, userCartId} = useContext(AppContext)
    useEffect(() => {
        localStorage.setItem('TotalPrice', JSON.stringify(total))
    },[total])
    return (
        <>
            <div className="miniNav">
                <button
                className="checkout_To_Cart_Button"
                onClick={()=>{
                    getClothing(item["category"], items, setItems)}}><Link to={`/${item["category"]}`} className="linkColor">
                        <img width="64" height="64" src="https://img.icons8.com/cotton/64/circled-left-2.png" alt="circled-left-2"/>
                    </Link>
                </button>
                <Home items={items} setItems={setItems} homePage={homePage} setHomePage={setHomePage}/>
                <div></div>
            </div>
            <div className="itemPage">
                <div className="container itemDescription">
                    <h3>{item.title}</h3>
                    <img src={item.image} alt="item" height="350px" width="350px"/>
                    <p>Item Description:<br></br> {item.description}</p>
                </div>
                <div className="itemPrice">
                    <p>$ {item.price}</p>
                    <div className="Quantity_Buttons">
                        <button onClick={() =>{
                            setTotal(current => current + item["price"])
                            if(total === 0){
                                localStorage.setItem('TotalPrice', JSON.stringify(item["price"]))
                            }else{
                                localStorage.setItem('TotalPrice', JSON.stringify(total))
                            }
                            addQuantity(item["id"])
                        }}>Add to Cart</button>
                        <button onClick={() =>{
                            setTotal(current => current - item["price"])
                            localStorage.setItem('TotalPrice', JSON.stringify(total))
                            reduceQuantity(item["id"])
                            if(!localStorage.getItem(`productId:${item.id}[${userCartId}]`)){
                                setTotal(0)
                            }
                        }}>-</button>
                    </div>
                </div>
            </div>
        </>
    )
}
