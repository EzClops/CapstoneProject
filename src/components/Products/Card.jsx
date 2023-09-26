import { Link } from "react-router-dom"
import ItemPage from "./ItemPage"
import { useState } from "react"

export default function Card({ item, setItem }){
    console.log("Hello", item)
    return(
        <>
            <div className="item_card">
                
                <Link to='/itempage' onClick={()=>{setItem(item)}}><img src={item.image} alt="Image" height="200px" width="180px"/></Link>
                <div className="details">
                    <Link to='/itempage' className="linkColor" onClick={()=>{setItem(item)}}><h3>{item.title}</h3></Link>
                    <p>Price: ${item.price}</p>
                </div>
            </div>
        </>
    )
}
