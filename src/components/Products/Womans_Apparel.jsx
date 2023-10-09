import Card from "./Card";
import Home from "../Navigation/Home";
import { useEffect, useContext } from "react";
import AppContext from "../GetFunctions/AppContext";

export default function Womans_Apparel(){
    const {setApparel, items, setHomePage, setItem} = useContext(AppContext)
    useEffect(() =>{
        setHomePage(false)
        setApparel("women's clothing")
    }, [])
    
    return(
        <>
            <Home/>
            <div className="cards">
                {items.map((item, key) => {
                    return(
                        <Card key={key} item={item} setItem={setItem}/>
                    )
                })}
            </div>
            
        </>
    )
}