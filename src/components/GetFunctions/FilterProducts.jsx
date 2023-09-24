function getAllProductPrices(sortedProductPrice){
    JSON.parse(localStorage.getItem("allLocalProducts")).map((product) => {
        sortedProductPrice.push(product.price)
    })
    return sortedProductPrice
}
export function ascendedPriceOrder(productsByPrice){
    let localSortedProductPrice = []
    getAllProductPrices(localSortedProductPrice)
    localSortedProductPrice.sort((a, b) => a - b)

    return sortProductsByPrice(localSortedProductPrice, productsByPrice)
}
export function descendedPriceOrder(productsByPrice){
    let localSortedProductPrice = []
    getAllProductPrices(localSortedProductPrice)
    localSortedProductPrice.sort((a, b) => b - a)

    return sortProductsByPrice(localSortedProductPrice, productsByPrice)
}
function sortProductsByPrice(localSortedProductPrice, productsByPrice){
    const sortedProductsByPrice = localSortedProductPrice.map((currentPrice) => {
        let targetProductPrice = null
        JSON.parse(localStorage.getItem("allLocalProducts")).forEach(product => {
            if(currentPrice === product.price){
                targetProductPrice = product
            }
        });
        return targetProductPrice;
    })
    productsByPrice = sortedProductsByPrice 
    return productsByPrice
}