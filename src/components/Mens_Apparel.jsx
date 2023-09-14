import Card from "./Card";
import Home from "./Home";

export default function Mens_Apparel({ setApparel, items, setItems, homePage, setHomePage, setItem }){
    
    setHomePage(false)
    setApparel("men's clothing")

    return(
        <>
            <Home items={items} setItems={setItems} homePage={homePage}/>
            <div className="cards">
                {items.map(item => {
                    return(
                        <Card item={item} setItem={setItem}/>
                    )
                })}
            </div>
        </>
    )
}