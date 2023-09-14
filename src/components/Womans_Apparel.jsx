import Card from "./Card";
import Home from "./Home";

export default function Womans_Apparel({ setApparel, items, setItems, homePage, setHomePage, setItem }){

    setHomePage(false)
    setApparel("women's clothing")
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