
const userCartId = 1;
let quantity_ProductIDsInUserCart = []
let localProductQuantity = [];

const getQuantity_ProductIDsInUserCart = () =>{
    if(!quantity_ProductIDsInUserCart){
        quantity_ProductIDsInUserCart = JSON.parse(localStorage.getItem(`All_Products_In_User_Cart${userCartId}`))
    }
}
getQuantity_ProductIDsInUserCart()

const getLocalProductQuantity = (productId) => {
    localProductQuantity = JSON.parse(localStorage.getItem(`productId:${productId}[${userCartId}]`))
}


export const addQuantity = (productId) => {
    getLocalProductQuantity(productId)
    addInitialProduct(productId)
    incrementProduct(productId)
    updateIndividualProductObj(productId)
}
const addInitialProduct = (productId) =>{
    if(!localProductQuantity){
        localStorage.setItem(`productId:${productId}[${userCartId}]`, JSON.stringify(0))
        getLocalProductQuantity(productId)
        quantity_ProductIDsInUserCart.push({productId: productId, quantity: 1})
        localStorage.setItem(`All_Products_In_User_Cart${userCartId}`, JSON.stringify(quantity_ProductIDsInUserCart))
    }
}
const incrementProduct = (productId) => {
    localProductQuantity += 1;
    localStorage.setItem(`productId:${productId}[${userCartId}]`, JSON.stringify(localProductQuantity))
    incrementProductInCart(productId)
}
const incrementProductInCart = (productId) => {
    quantity_ProductIDsInUserCart.map((product, key) => {
        if(product["productId"] === productId){
            quantity_ProductIDsInUserCart.splice(key, 1, {productId: productId, quantity: localProductQuantity})    
            console.log(quantity_ProductIDsInUserCart)
            localStorage.setItem(`All_Products_In_User_Cart${userCartId}`, JSON.stringify(quantity_ProductIDsInUserCart))
        }
    })
}

export const reduceQuantity = (productId) => {
    getLocalProductQuantity(productId)
    
    decrementProduct(productId)
    console.log("local", localProductQuantity)
    if(localProductQuantity === 0){
        removeItemFromCart(productId)
    }
}
const decrementProduct = (productId) => {
    if(localProductQuantity > 0 && localProductQuantity){
        localProductQuantity -= 1;
        localStorage.setItem(`productId:${productId}[${userCartId}]`, JSON.stringify(localProductQuantity))
        decrementProductInCart(productId)
        updateIndividualProductObj(productId)
    } 
}
const decrementProductInCart = (productId) => {
    quantity_ProductIDsInUserCart.map((product, key) => {
        if(product["productId"] === productId){
            quantity_ProductIDsInUserCart.splice(key, 1, {productId: productId, quantity: localProductQuantity})    
            localStorage.setItem(`All_Products_In_User_Cart${userCartId}`, JSON.stringify(quantity_ProductIDsInUserCart))
        }
    })
}
const updateIndividualProductObj = (productId) => {
    localStorage.setItem(`productId:${productId}[${userCartId}]`, JSON.stringify(localProductQuantity))
}


export const removeItemFromCart = (productId) => {
    quantity_ProductIDsInUserCart.map((product, key) => {
        if(product["productId"] === productId){
            quantity_ProductIDsInUserCart.splice(key, 1)
            localStorage.removeItem(`productId:${productId}[${userCartId}]`)
            localStorage.removeItem(`ProductTotalPrice_${productId}`)
            localStorage.setItem(`All_Products_In_User_Cart${userCartId}`, JSON.stringify(quantity_ProductIDsInUserCart))
        }
    })
}