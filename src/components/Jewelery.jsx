import { useEffect, useState } from "react";
import Card from "./Card";
import Home from "./Home";

export default function Jewelery({ setApparel, items, setItems, homePage, setHomePage, setItem }){
    
    setHomePage(false)
    setApparel("jewelery")
    return(
        <>
            <Home items={items} setItems={setItems} homePage={homePage}/>
            <div className="cards">
                {items.map(item => {
                    return(
                        <Card item={item} setItem={setItem}/>
                    )
                })}
            </div>
            
        </>
    )
}