import Card from "./Card";
import Home from "./Home";

export default function Electronics({ setApparel, items, setItems, homePage, setHomePage, setItem }){
    
    setHomePage(false)
    setApparel("electronics")
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