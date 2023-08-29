import App from "../App";
import Apparel_Load from "./Apparel_Load"
import { useEffect, useState } from "react";
import Card from "./Card";

export default function Mens_Apparel({ apparel, setApparel, items, setItems }){
    
    setApparel("men's clothing")
    const getClothing = () => {
        async function fetchClothing() {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/category/${apparel}`);
                const result = await response.json();
                // console.log(result);
                setItems(result);
            } catch (error) {
                console.error(error);
            }
        }
        fetchClothing();
    };
    // Apparel_Load(apparel, items, setItems);
    useEffect(getClothing, [])
    // console.log("Hi", items)
    return(
        <>
           {items.map(item => {
                return(
                    <Card item={item}/>
                )
           })}
            
        </>
    )
}