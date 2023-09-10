import App from "../App";
import { useEffect, useState } from "react";
import Card from "./Card";
import Home from "./Home";
import { getClothing } from "../API/apiCalls";

export default function Mens_Apparel({ setApparel, items, setItems, homePage, setHomePage, setItem }){
    
    // console.log("Mens apparel", sessionStorage.getItem("token"))
    setHomePage(false)
    setApparel("men's clothing")
    console.log(items)
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