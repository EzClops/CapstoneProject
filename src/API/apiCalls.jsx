import { useState, useEffect } from "react";

// const [apparel, setApparel] = useState("")
// const [items, setItems] = useState([]);

export const getClothing = async (apparel, items, setItems ) => {
    console.log(apparel)
    try {
        const response = await fetch(`https://fakestoreapi.com/products/category/${apparel}`);
        const result = await response.json();
        // console.log(result);
        setItems(result)
        return items
    } catch (error) {
        console.error(error);
    }
    };