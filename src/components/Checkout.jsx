import { updateUserAddress } from "../API/apiCalls"
import { useState } from "react";
import { useNavigate } from "react-router";
import CartItem from "./CartItem";
import Cart from "./Cart";

export default function Checkout({ item, setItem, product, setCartPage, setCheckoutPage, submitAddress, setSubmitAddress, submitPayment, setSubmitPayment, error, setError }){
    // updateUserAddress("hi", "bye", "why", "sky", 5, "85923", "9165731234")
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [city, setCity] = useState("");
    const [street, setStreet] = useState("");
    const [number, setNumber] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [phone, setPhone] = useState("");
    // const [error, setError] = useState("");
    const [card, setCard] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [cvv, setCvv] = useState("");
    

    const navigate = useNavigate();
    
    function clearInput(){
        setFirstname("")
        setLastname("")
        setCity("")
        setStreet("")
        setNumber("")
        setZipcode("")
        setPhone("")
        setError("")
        setCard("")
        setMonth("")
        setYear("")
        setCvv("")
    }

    async function handleSubmitAddress(e){
        e.preventDefault()
        try{
           const result = await updateUserAddress(firstname, lastname, city, street, number, zipcode, phone, setError)
            console.log(result)
            if(result){
                clearInput()
                setSubmitAddress(true)
            }
        }catch(error){
            console.error(error.message)
        }
    }

    async function handleSubmitPayment(e){
        e.preventDefault()
        try{
            if(card.length !== 16 || isNaN(Number(card))){
                setError("Invalid card number")
                throw new Error("Invalid card number");
            }
            if(month.length !== 2 || isNaN(Number(month))){
                setError("Invalid month")
                throw new Error("Invalid month");
            }
            if(year.length !== 4 || isNaN(Number(year))){
                setError("Invalid year")
                throw new Error("Invalid year");
            }
            if(cvv.length !== 3 || isNaN(Number(cvv))){
                setError("Invalid CVV")
                throw new Error("Invalid CVV");
            }
            clearInput()
            setSubmitPayment(true)
        }catch(error){
            console.error(error.message)
        }
    }




    return (
        <>
            <header className="checkoutHeader">
                <h2>Checkout</h2>
                <button onClick={() =>{
                    setCartPage(true)
                    setCheckoutPage(false)
                    setSubmitAddress(false)
                    setSubmitPayment(false)
                    setError(null)
                    navigate("/cart")

                }} className="linkColor">Cart</button>
            </header>
                <span>{error && <p>{error}</p>}</span>
            <div className="container">
                <div className="checkout">
                    <div className="address">
                        <div className="section"><h3>Address</h3></div>
                        <div className="form">
                            <form onSubmit={handleSubmitAddress}>
                                <div className="left">
                                    <label>
                                        <input required value={firstname} placeholder="Firstname" onChange={e =>{
                                            setFirstname(e.target.value)
                                        }}/>
                                    </label>
                                    <label>
                                        <input required value={lastname} placeholder="Lastname" onChange={e =>{
                                            setLastname(e.target.value)
                                        }}/>
                                    </label>
                                    <label>
                                        <input required value={street} placeholder="Street Address" onChange={e =>{
                                            setStreet(e.target.value)
                                        }}/>
                                    </label>

                                </div>
                                <div className="right">
                                    <label>
                                        <input value={number} placeholder="Apt. # (Optional)" onChange={e =>{
                                            setNumber(e.target.value)
                                        }}/>
                                    </label>
                                    <label>
                                        <input required value={city} placeholder="City" onChange={e =>{
                                            setCity(e.target.value)
                                        }}/>
                                    </label>
                                    <label>
                                        <input required value={zipcode} placeholder="Zipcode" onChange={e =>{
                                            setZipcode(e.target.value)
                                        }}/>
                                    </label>
                                    <label>
                                        <input value={phone} placeholder="Phone # (Optional)" onChange={e =>{
                                            setPhone(e.target.value)
                                        }}/>
                                    </label>

                                </div>
                                <input type="submit" value="Submit"/>
                            </form>
                        </div>
                    </div>
                    <hr></hr>
                    <hr></hr>
                    <div className="payment">
                        <div className="section"><h3>Payment</h3></div>
                        <div className="form">
                            <form onSubmit={handleSubmitPayment}>
                                <div className="names">
                                    <label>
                                        <input required value={firstname} placeholder="Firstname" onChange={e =>{
                                            setFirstname(e.target.value)
                                        }}/>
                                    </label>
                                    <label>
                                        <input required value={lastname} placeholder="Lastname" onChange={e =>{
                                            setLastname(e.target.value)
                                        }}/>
                                    </label>
                                </div>
                                <div className="cardNumber">
                                    <label>
                                        <input required value={card} placeholder="Card number" onChange={e =>{
                                            console.log(e)
                                            
                                            if(!(card.length >= 16) || e.nativeEvent.inputType === "deleteContentBackward"){
                                                setCard(e.target.value)
                                            }
                                        }}/>
                                    </label>
                                </div>
                                <div className="extraCard">
                                    <div className="dates">
                                        <label>
                                            <input required value={month} placeholder="MM" onChange={e =>{
                                                if(!(month.length >= 2) || e.nativeEvent.inputType === "deleteContentBackward"){
                                                setMonth(e.target.value)
                                                }   
                                            }}/>
                                        </label>
                                        {/* <p>/</p> */}
                                        <label>
                                            <input required value={year} placeholder="YYYY" onChange={e =>{
                                                if(!(year.length >= 4) || e.nativeEvent.inputType === "deleteContentBackward"){
                                                setYear(e.target.value)

                                                }
                                                // while(year.length <= 4){
                                                //     setYear(e.target.value)
                                                // }
                                            }}/>
                                        </label>
                                    </div>
                                    <div className="CVV">
                                        <label>
                                            <input required value={cvv} placeholder="CVV" onChange={e =>{
                                                if(!(cvv.length >= 3) || e.nativeEvent.inputType === "deleteContentBackward"){
                                                setCvv(e.target.value)
                                            }
                                                // while(cvv.length <= 3){
                                                //     setCvv(e.target.value)
                                                // }
                                            }}/>
                                        </label>
                                    </div>
                                </div>
                                <input type="submit" value="Submit"/>
                            </form>
                        </div>
                    </div> 
                    <div className="userCart">
                        <div className="section"><h3>Shopping Cart</h3></div>
                        {
                            !(sessionStorage.getItem("token")) ? <p>Cart is Empty</p> :
                            product.map(i =>{
                                return(
                                    <CartItem productId={i["productId"]} quantity={i["quantity"]} item={item} setItem={setItem}/>
                                )
                            }) 
                        }
                        
                    </div>
                </div>
                <button onClick={()=>{
                    if(submitAddress && submitPayment){
                        setCartPage(false)
                        setCheckoutPage(false)
                        navigate('/placeorder')
                    }else{
                        setError("Complete both Address and Payment form to place order")
                        throw new Error("Complete both Address and Payment form to place order")
                    }
                }}>Place your order</button>
            </div>
        </>
    )
}