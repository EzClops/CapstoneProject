import SearchCard from "./SearchCard"

export default function FilteredProducts({ isAscendingOrder, isDescendingOrder, productsByPrice, setItem, setHomePage, setMobile_Menu, setHam, setSearchImage, setSearchChange, setCartPage, searchChange }){
    return(
        <>
        <div className='filteredList'>
            {!(isAscendingOrder || isDescendingOrder) ? (JSON.parse(localStorage.getItem("allLocalProducts")).map((product) => {
                if(searchChange.length !== 0 && (product.title.toLowerCase().includes(searchChange.toLocaleLowerCase()) || product.category.toLowerCase().includes(searchChange.toLocaleLowerCase()))){
                    return(
                        <SearchCard product={product} setItem={setItem} setHomePage={setHomePage} setMobile_Menu={setMobile_Menu} setHam={setHam} setSearchImage={setSearchImage} setSearchChange={setSearchChange} setCartPage={setCartPage}/>
                    )
                }
            })) : isAscendingOrder ? productsByPrice.current.map((product) => {
                    
                    if(searchChange.length !== 0 && (product.title.toLowerCase().includes(searchChange.toLocaleLowerCase()) || product.category.toLowerCase().includes(searchChange.toLocaleLowerCase()))){
                        return(
                            <SearchCard product={product} setItem={setItem} setHomePage={setHomePage} setMobile_Menu={setMobile_Menu} setHam={setHam} setSearchImage={setSearchImage} setSearchChange={setSearchChange} setCartPage={setCartPage}/>
                        )
                    }
                })
                : productsByPrice.current.map((product) => {
                    if(searchChange.length !== 0 && (product.title.toLowerCase().includes(searchChange.toLocaleLowerCase()) || product.category.toLowerCase().includes(searchChange.toLocaleLowerCase()))){
                        return(
                            <SearchCard product={product} setItem={setItem} setHomePage={setHomePage} setMobile_Menu={setMobile_Menu} setHam={setHam} setSearchImage={setSearchImage} setSearchChange={setSearchChange} setCartPage={setCartPage}/>
                        )
                    }
                })
            }
        </div>
        </>
    )
}