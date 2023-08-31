import { Link } from "react-router-dom"
import ItemPage from "./ItemPage"

export default function Card({ item, setItem, setItems, homePage, setHomePage }){
    // setItems(item)
    return(
        <>
            <div className="item_card">
                <Link to='/itempage' onClick={()=>{setItem(item)}}><img src={item.image} alt="Image" height="200px" width="180px"/></Link>
                <div className="details">
                    <Link to='/itempage' onClick={()=>{setItem(item)}}><h3>{item.title}</h3></Link>
                    <p>Price: ${item.price}</p>
                    {/* <p>{item.rating}</p> */}
                    {/* <p>{item.description}</p> */}
                </div>
            </div>
        </>
    )
}

// item={item} setItem={setItems} homePage={homePage} setHomePage={setHomePage}