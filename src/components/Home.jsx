import { Link, Outlet } from "react-router-dom"
import { getClothing } from "../API/apiCalls";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Home({items, setItems, homePage, token, setCartPage }){

    //Hard coding the specific category we want since apparel useState wasn't giving us our desired value when we wanted
    let cloth = "";
    setCartPage(false)
    console.log("Home", token)
    console.log("session", sessionStorage.getItem("token"))
    return(
        <>
            {/* each button here will have a on click event that calls the specific category API and loads its values on category page */}
            <div className={"container categoryPage" + (homePage ? " mainPage" : "")}>
                <button onClick={()=>{
                    cloth = "men's clothing"
                    getClothing(cloth, items, setItems)}}><Link to='/mens_apparel' className="linkColor">Men's Apparel</Link></button>
                <button onClick={()=>{
                    cloth = "women's clothing"
                    getClothing(cloth, items, setItems)}}><Link to='/womans_apparel' className="linkColor">Woman's Apparel</Link></button>
                <button onClick={()=>{
                    cloth = "electronics"
                    getClothing(cloth, items, setItems)}}><Link to='/electronics' className="linkColor">Electronics</Link></button>
                <button onClick={()=>{
                    cloth = "jewelery"
                    getClothing(cloth, items, setItems)}}><Link to='/jewelery' className="linkColor">Jewelery</Link></button>
            </div>
            <Outlet/>
        </>
    )
}