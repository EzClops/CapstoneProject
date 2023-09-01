import { useState, useEffect } from "react";


export const getClothing = async (apparel, items, setItems ) => {
    // console.log(apparel)
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

/*Cart API calls*/
export const getCart = async (userId) => {
    try{
        const response = await fetch(`https://fakestoreapi.com/carts/user/${userId}`);
        const result = await response.json();
        console.log(result)
    }catch(error){
        console.error(error);
    }
}
    
export const addCart = async (userId, productId, quantity) => {
    try {
        const response = await fetch('https://fakestoreapi.com/carts',{
            method:"PUT",
            headers: {
                'Content-Type': 'application/json'
              },
            body:JSON.stringify(
                {
                    userId: userId,
                    date:2019-12-10,
                    products:[{productId:productId,quantity:1},{productId:productId,quantity:5}]
                }
            )
        })
        const result = await response.json();
        console.log(result);
    }catch(error){
        console.error(error);
    }
}

/* End of Cart API calls*/