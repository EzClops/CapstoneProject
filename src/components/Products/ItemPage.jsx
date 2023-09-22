import Home from "../Navigation/Home";
import { Link } from "react-router-dom"
import { getClothing, updateInCart, getUserCart } from "../../API/apiCalls"
import { addQuantity, reduceQuantity } from "../LocalStorage"

export default function ItemPage({  item, items, setItems, homePage, setHomePage }){

    // reduceQuantity(item)

    return (
        <>
            <div className="miniNav">
                <button onClick={()=>{
                    getClothing(item["category"], items, setItems)}}><Link to={`/${item["category"]}`} className="linkColor">Return</Link>
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
                            addQuantity(item["id"])
                        }}>Add to Cart</button>
                        <button onClick={() =>{
                            reduceQuantity(item["id"])
                        }}>-</button>
                    </div>
                </div>
            </div>
        </>
    )
}

