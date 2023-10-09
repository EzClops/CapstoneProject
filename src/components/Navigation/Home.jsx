import { Link, Outlet } from "react-router-dom"
import { getClothing, getAllProducts } from "../../API/apiCalls"
import AppContext from "../GetFunctions/AppContext";
import { useContext } from "react";

export default function Home(){
    const {items, setItems, homePage} = useContext(AppContext)
    //Hard coding the specific category we want since apparel useState wasn't giving us our desired value when we wanted
    let clothing = "";
    
    getAllProducts();
    return(
        <>
            {/* each button here will have a on click event that calls the specific category API and loads its values on category page */}
            <div className={"container categoryPage" + (homePage ? " homePage" : "")}>
                <button onClick={()=>{
                    clothing = "men's clothing"
                    getClothing(clothing, items, setItems)}}><Link to="/men's clothing" className="linkColor">Men's Apparel</Link></button>
                <button onClick={()=>{
                    clothing = "women's clothing"
                    getClothing(clothing, items, setItems)}}><Link to="/women's clothing" className="linkColor">Woman's Apparel</Link></button>
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