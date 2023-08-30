import App from "../App";
import Apparel_Load from "./Apparel_Load"
import { useEffect, useState } from "react";
import Card from "./Card";
import Home from "./Home";
import { getClothing } from "../API/apiCalls";

export default function Mens_Apparel({ apparel, setApparel, items, setItems }){
    

    setApparel("men's clothing")
    
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


// getClothing(apparel, items, setItems)
    // useEffect(()=>{
    //     async function fetchClothing(){
    //         try {
    //             const response = await fetch(`https://fakestoreapi.com/products/category/${apparel}`);
    //             const result = await response.json();
    //             // console.log(result);
    //             setItems(result);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     }
    //     fetchClothing();    
    // }, [])