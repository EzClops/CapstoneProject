import App from "../App";
import Apparel_Load from "./Apparel_Load"
import { useEffect, useState } from "react";
import Card from "./Card";
import Home from "./Home";
import { getClothing } from "../API/apiCalls";

export default function Womans_Apparel({ setApparel, items, setItems, homePage, setHomePage, setItem }){

    setHomePage(false)
    setApparel("women's clothing")
    return(
        <>
            <Home items={items} setItems={setItems} homePage={homePage} setHomePage={setHomePage}/>
            {/* {getClothing(apparel, setItems)} */}
            <div className="cards">
                {items.map(item => {
                    {/* setItem(i) */}
                    return(
                        <Card item={item} setItem={setItem}/>
                    )
                })}
            </div>
            
        </>
    )
}