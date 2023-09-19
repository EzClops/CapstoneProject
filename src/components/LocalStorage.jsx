

const userCartId = 1;
let All_Local_Productz = JSON.parse(localStorage.getItem(`All_Products_In_User_Cart${userCartId}`))

// console.log(JSON.parse(localStorage.getItem(`All_Products_In_User_Cart${userCartId}`))["productsInCart"])
export const addQuantity = (item) => {
    // console.log(localStorage.getItem(`productId:${item}[${userCartId}]`))
    let localProductQuantity = JSON.parse(localStorage.getItem(`productId:${item}[${userCartId}]`))

    if(!localProductQuantity){
        All_Local_Productz.push({productId: item, quantity:1})
        localStorage.setItem(`All_Products_In_User_Cart${userCartId}`, JSON.stringify(All_Local_Productz))
    }
    localProductQuantity += 1;
    localStorage.setItem(`productId:${item}[${userCartId}]`, JSON.stringify(localProductQuantity))
}

export const reduceQuantity = (item) => {
    let localProductQuantity = JSON.parse(localStorage.getItem(`productId:${item}[${userCartId}]`))
    // console.log(All_Local_Productz)
    if(localProductQuantity > 0 && localProductQuantity){
        localProductQuantity -= 1;
        localStorage.setItem(`productId:${item}[${userCartId}]`, JSON.stringify(localProductQuantity))
    } 
    if(localProductQuantity === 0){
        // console.log("localProductQuantity", localProductQuantity)
        All_Local_Productz.map((product, key) => {
            if(product["productId"] === item){
                All_Local_Productz.splice(key, 1)
                localStorage.removeItem(`productId:${item}[${userCartId}]`)
                localStorage.setItem(`All_Products_In_User_Cart${userCartId}`, JSON.stringify(All_Local_Productz))
            }
        })
    }
}

export const removeItemFromCart = (item, setItem2) => {
    let localProductQuantity = JSON.parse(localStorage.getItem(`productId:${item}[${userCartId}]`))

    console.log("Before splice", All_Local_Productz)
    All_Local_Productz.map((product, key) => {
        if(product["productId"] === item){
            console.log("Been")
            All_Local_Productz.splice(key, 1)
            console.log("After splice", All_Local_Productz)
            localStorage.removeItem(`productId:${item}[${userCartId}]`)
            localStorage.setItem(`All_Products_In_User_Cart${userCartId}`, JSON.stringify(All_Local_Productz))
        }
    })
    
    
}