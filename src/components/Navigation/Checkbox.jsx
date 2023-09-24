import { ascendedPriceOrder, descendedPriceOrder } from "../GetFunctions/FilterProducts"
import FilteredProducts from "./FilteredProducts"

export default function Checkbox({ isAscendingOrder, setIsAscendingOrder, isDescendingOrder, setIsDescendingOrder, productsByPrice, setItem, setHomePage, setMobile_Menu, setHam, setSearchImage, setSearchChange, setCartPage, searchChange, allLocalProducts }){
    return (
        <>
            <div>
                <input type="checkbox" id="isAscendingOrder" checked={isAscendingOrder} name="isAscendingOrder" onClick={() => {
                    if(!isAscendingOrder){
                        productsByPrice.current = ascendedPriceOrder(productsByPrice.current) 
                        setIsAscendingOrder(true)
                        setIsDescendingOrder(false)
                    }else{

                        setIsAscendingOrder(false)
                        }
                    
                }}/>
                <label>Ascending</label>
            </div>
            <div>
                <input type="checkbox" id="isDescendingOrder" checked={isDescendingOrder} name="isDescendingOrder" onClick={() => {
                    if(!isDescendingOrder){
                        productsByPrice.current = descendedPriceOrder(productsByPrice.current) 
                        setIsDescendingOrder(true)
                        setIsAscendingOrder(false)
                    }else{

                        setIsDescendingOrder(false)
                        }
                    
                }}/>
                <label>Descending</label>
            </div>
            <FilteredProducts isAscendingOrder={isAscendingOrder} isDescendingOrder={isDescendingOrder} productsByPrice={productsByPrice} setItem={setItem} setHomePage={setHomePage} setMobile_Menu={setMobile_Menu} setHam={setHam} setSearchImage={setSearchImage} setSearchChange={setSearchChange} setCartPage={setCartPage} searchChange={searchChange} allLocalProducts={allLocalProducts}/>
        </>
    )
}