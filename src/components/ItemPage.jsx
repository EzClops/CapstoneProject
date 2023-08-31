import Home from "./Home"

export default function ItemPage({  item, items, setItems, homePage, setHomePage  }){
    console.log("Hi", item)
    return (
        <>
            <Home items={items} setItems={setItems} homePage={homePage} setHomePage={setHomePage}/>

        </>
    )
}