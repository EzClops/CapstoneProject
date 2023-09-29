export default function PlaceOrder(){
    const userCartId = 1;

    localStorage.setItem(`All_Products_In_User_Cart${userCartId}`, '[]')
    return(
        <>
            <h2>Thank you! You're Order is being prepared.</h2>
            <p>navigate back to cart or home page</p>
        </>
    )
}