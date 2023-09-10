import { useState, useEffect } from "react";

/* Products API calls */
export const getClothing = async (apparel, items, setItems ) => {
    // console.log(apparel)
    try {
        const response = await fetch(`https://fakestoreapi.com/products/category/${apparel}`);
        const result = await response.json();
        // console.log(result);
        setItems(result)
        return items
    } catch (error) {
        console.error(error.message);
    }
};

export const getItem = async (productId, setItem) => {
    try{
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const result = await response.json();
        // setItem(result)
        console.log(result)
        return result
    } catch(error){
        console.error(error.message);
    }
}


/* End of Products API calls */


/*Cart API calls*/
export const getUserCart = async (userId) => {
    try{
        const response = await fetch(`https://fakestoreapi.com/carts/user/${userId}`);
        const result = await response.json();
        return result
    }catch(error){
        console.error(error.message);
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
        console.error(error.message);
    }
}

/* End of Cart API calls*/


/*  User API calls   */
export const getAllUsers = async() =>{
    try{
        const response = await fetch('https://fakestoreapi.com/users');
        const result = await response.json();
        console.log(result);
        return result
    }catch(error){
        console.error(error.message)
    }
}

export const updateUserAddress = async(firstname, lastname, city, street, number, zipcode, phone) =>{
    try{
        const response = await fetch('https://fakestoreapi.com/users/7',{
            method:"PUT",
            headers: {
                'Content-Type': 'application/json'
              },
            body:JSON.stringify(
                {
                    name:{
                        firstname: firstname,
                        lastname: lastname
                    },
                    address:{
                        city: city,
                        street: street,
                        number: number, //int
                        zipcode: zipcode, //string
                    },
                    phone: phone //string
                }
            )
        });
        // console.log(response)
        const result = await response.json();
        // console.log(result)
        return result
    }catch(error){
        console.error(error.message)
    }
}

/* End of User API calls */