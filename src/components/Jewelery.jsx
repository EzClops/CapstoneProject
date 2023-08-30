import App from "../App";
import Apparel_Load from "./Apparel_Load"
import { useEffect, useState } from "react";
import Card from "./Card";
import Home from "./Home";

export default function Jewelery({ apparel, setApparel, items, setItems }){
    
    setApparel("jewelery")

    return(
        <>
            <Home items={items} setItems={setItems}/>
            <div className="cards">
                {items.map(item => {
                    return(
                        <Card item={item}/>
                    )
                })}
            </div>
            
        </>
    )
}