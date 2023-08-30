import App from "../App";
import Apparel_Load from "./Apparel_Load"
import { useEffect, useState } from "react";
import Card from "./Card";
import Home from "./Home";
import { getClothing } from "../API/apiCalls";

export default function Womans_Apparel({ apparel, setApparel, items, setItems }){
    
    setApparel("women's clothing")
    
    return(
        <>
            <Home items={items} setItems={setItems}/>
            {/* {getClothing(apparel, setItems)} */}
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