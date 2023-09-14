import Home from "./Home"
import { Link } from "react-router-dom"

export default function ItemPage({  item, items, setItems, homePage, setHomePage  }){
    console.log("Hi", item)
    return (
        <>
            <Home items={items} setItems={setItems} homePage={homePage} setHomePage={setHomePage}/>
            <div className="itemPage">
                <div className="container itemDescription">
                    <h3>{item.title}</h3>
                    <img src={item.image} alt="item" height="350px" width="350px"/>
                    <p>Item Description:<br></br> {item.description}</p>
                </div>
                <div className="itemPrice">
                    <p>$ {item.price}</p>
                    <button>Add to Cart</button>
                </div>
            </div>
        </>
    )
}

