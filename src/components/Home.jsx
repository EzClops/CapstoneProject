import { Link, Outlet } from "react-router-dom"
import { getClothing } from "../API/apiCalls";

export default function Home({items, setItems, homePage, token }){

    //Hard coding the specific category we want since apparel useState wasn't giving us our desired value when we wanted
    let clothing = "";
    console.log("Home", token)
    console.log("session", sessionStorage.getItem("token"))
    return(
        <>
            {/* each button here will have a on click event that calls the specific category API and loads its values on category page */}
            <div className={"container categoryPage" + (homePage ? " homePage" : "")}>
                <button onClick={()=>{
                    clothing = "men's clothing"
                    getClothing(clothing, items, setItems)}}><Link to='/mens_apparel' className="linkColor">Men's Apparel</Link></button>
                <button onClick={()=>{
                    clothing = "women's clothing"
                    getClothing(clothing, items, setItems)}}><Link to='/womans_apparel' className="linkColor">Woman's Apparel</Link></button>
                <button onClick={()=>{
                    clothing = "electronics"
                    getClothing(clothing, items, setItems)}}><Link to='/electronics' className="linkColor">Electronics</Link></button>
                <button onClick={()=>{
                    clothing = "jewelery"
                    getClothing(clothing, items, setItems)}}><Link to='/jewelery' className="linkColor">Jewelery</Link></button>
            </div>
            <Outlet/>
        </>
    )
}