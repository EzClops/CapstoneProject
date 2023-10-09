import { useEffect, useContext } from "react";
import Card from "./Card";
import Home from "../Navigation/Home";
import AppContext from "../GetFunctions/AppContext";

export default function Jewelery(){
    const {setApparel, items, setHomePage, setItem} = useContext(AppContext)
    useEffect(() =>{
        setHomePage(false)
        setApparel("jewelery")
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