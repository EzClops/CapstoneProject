import SearchCard from "./SearchCard"

export default function FilteredProducts({ isAscendingOrder, isDescendingOrder, productsByPrice, setItem, setHomePage, setMobile_Menu, setHam, setSearchImage, setSearchChange, setCartPage, searchChange, allLocalProducts, isCategoryPage, setIsCategoryPage }){
    return(
        <>
        <div className='filteredList'>
            {!(isAscendingOrder || isDescendingOrder) ? (allLocalProducts.map((product) => {
                if((searchChange.length !== 0 && (product.title.toLowerCase().includes(searchChange.toLocaleLowerCase()) || product.category.toLowerCase().includes(searchChange.toLocaleLowerCase()))) || isCategoryPage){
                    return(
                        <SearchCard product={product} setItem={setItem} setHomePage={setHomePage} setMobile_Menu={setMobile_Menu} setHam={setHam} setSearchImage={setSearchImage} setSearchChange={setSearchChange} setCartPage={setCartPage} setIsCategoryPage={setIsCategoryPage}/>
                    )
                }
            })) : isAscendingOrder ? productsByPrice.current.map((product) => {
                    
                if((searchChange.length !== 0 && (product.title.toLowerCase().includes(searchChange.toLocaleLowerCase()) || product.category.toLowerCase().includes(searchChange.toLocaleLowerCase()))) || isCategoryPage){
                        return(
                            <SearchCard product={product} setItem={setItem} setHomePage={setHomePage} setMobile_Menu={setMobile_Menu} setHam={setHam} setSearchImage={setSearchImage} setSearchChange={setSearchChange} setCartPage={setCartPage} setIsCategoryPage={setIsCategoryPage}/>
                        )
                    }
                })
                : productsByPrice.current.map((product) => {
                    if((searchChange.length !== 0 && (product.title.toLowerCase().includes(searchChange.toLocaleLowerCase()) || product.category.toLowerCase().includes(searchChange.toLocaleLowerCase()))) || isCategoryPage){
                        return(
                            <SearchCard product={product} setItem={setItem} setHomePage={setHomePage} setMobile_Menu={setMobile_Menu} setHam={setHam} setSearchImage={setSearchImage} setSearchChange={setSearchChange} setCartPage={setCartPage} setIsCategoryPage={setIsCategoryPage}/>
                        )
                    }
                })
            }
        </div>
        </>
    )
}