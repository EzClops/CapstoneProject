import Home from "./Home"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { getClothing, updateInCart, getUserCart } from "../API/apiCalls"
import { useCallback } from "react"

export default function ItemPage({  item, items, setItems, homePage, setHomePage, product, setQuantity_Change_Value, setId_Change_Value  }){
    const userCartId = 1;
    let All_Local_Productz = JSON.parse(localStorage.getItem(`All_Products_In_User_Cart${userCartId}`))

    // console.log(JSON.parse(localStorage.getItem(`All_Products_In_User_Cart${userCartId}`))["productsInCart"])
    const addQuantity = useCallback(async () => {
        let localProduct = JSON.parse(localStorage.getItem(`productId:${item["id"]}[${userCartId}]`))
        console.log(!localProduct)
        if(!localProduct){
            All_Local_Productz.push({productId: item["id"], quantity:1})
            localStorage.setItem(`All_Products_In_User_Cart${userCartId}`, JSON.stringify(All_Local_Productz))
        }
        localProduct += 1;
        localStorage.setItem(`productId:${item["id"]}[${userCartId}]`, JSON.stringify(localProduct))
    },[])

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
                    <button onClick={addQuantity}>Add to Cart</button>
                </div>
            </div>
        </>
    )
}

