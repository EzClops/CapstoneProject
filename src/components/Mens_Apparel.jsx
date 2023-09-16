import Card from "./Card";
import Home from "./Home";
import { useEffect } from "react";

export default function Mens_Apparel({ setApparel, items, setItems, homePage, setHomePage, setItem, token }){
    
    useEffect(() =>{
        setHomePage(false)
        setApparel("men's clothing")
    }, [])

    return(
        <>
            <Home items={items} setItems={setItems} homePage={homePage} token={token}/>
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