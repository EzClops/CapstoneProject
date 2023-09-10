import { useState, useEffect } from 'react'

export default async function Apparel_Load({ apparel, items, setItems }){
    
    useEffect(() =>{
        async function fetchClothing(){
            try{
                const response = await fetch(`https://fakestoreapi.com/products/category/${apparel}`);
                const result = await response.json();
                // console.log(result);
                setItems(result)
                return items
            }catch(error){
                console.error(error);
            }
        }
        fetchClothing()
    }, [])
}