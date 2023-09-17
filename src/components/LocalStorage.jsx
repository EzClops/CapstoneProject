
const userCartId = 1;
let All_Local_Productz = JSON.parse(localStorage.getItem(`All_Products_In_User_Cart${userCartId}`))

// console.log(JSON.parse(localStorage.getItem(`All_Products_In_User_Cart${userCartId}`))["productsInCart"])
export const addQuantity = (item) => {
    let localProductQuantity = JSON.parse(localStorage.getItem(`productId:${item["id"]}[${userCartId}]`))

    if(!localProductQuantity){
        All_Local_Productz.push({productId: item["id"], quantity:1})
        localStorage.setItem(`All_Products_In_User_Cart${userCartId}`, JSON.stringify(All_Local_Productz))
    }
    localProductQuantity += 1;
    localStorage.setItem(`productId:${item["id"]}[${userCartId}]`, JSON.stringify(localProductQuantity))
}

export const reduceQuantity = (item) => {
    let localProductQuantity = JSON.parse(localStorage.getItem(`productId:${item["id"]}[${userCartId}]`))
    console.log(All_Local_Productz)
    if(localProductQuantity > 1 && localProductQuantity){
        localProductQuantity -= 1;
        localStorage.setItem(`productId:${item["id"]}[${userCartId}]`, JSON.stringify(localProductQuantity))
    } 
    if(localProductQuantity === 1 && localProductQuantity){
        removeItemFromCart(item)
    }
}

export const removeItemFromCart = (item) => {
    let localProductQuantity = JSON.parse(localStorage.getItem(`productId:${item["id"]}[${userCartId}]`))

    if(localProductQuantity === 1 && localProductQuantity){
        All_Local_Productz.map((product, key) => {
            if(product["productId"] === item["id"]){
                All_Local_Productz.splice(key, 1)
                localStorage.removeItem(`productId:${item["id"]}[${userCartId}]`)
                localStorage.setItem(`All_Products_In_User_Cart${userCartId}`, JSON.stringify(All_Local_Productz))
            }
        })
    }
}