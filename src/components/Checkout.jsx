import { updateUserAddress } from "../API/apiCalls"
import { useState } from "react";
import { useNavigate } from "react-router";

export default function Checkout(){
    // updateUserAddress("hi", "bye", "why", "sky", 5, "85923", "9165731234")
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [city, setCity] = useState("");
    const [street, setStreet] = useState("");
    const [number, setNumber] = useState(null);
    const [zipcode, setZipcode] = useState("");
    const [phone, setPhone] = useState("");

    const navigate = useNavigate();
    
    async function handleSubmit(e){
        e.preventDefault()
        try{
           const result = await updateUserAddress(firstname, lastname, city, street, number, zipcode, phone)
            console.log(result)
        }catch(error){
            console.error(error.message)
        }
    }




    return (
        <>
            <header className="checkoutHeader">
                <h2>Checkout</h2>
                <button onClick={() =>{navigate("/cart")}} className="linkColor">Cart</button>
            </header>
            <div className="container">
                <div className="Address">
                    <div className="section"><h3>Address</h3></div>
                    <div className="form">
                        <form onSubmit={handleSubmit}>
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
                                <input required value={city} placeholder="City" onChange={e =>{
                                    setCity(e.target.value)
                                }}/>
                            </label>
                            <label>
                                <input required value={street} placeholder="Street Address" onChange={e =>{
                                    setStreet(e.target.value)
                                }}/>
                            </label>
                            <label>
                                <input value={number} placeholder="Apt. # (Optional)" onChange={e =>{
                                    setNumber(e.target.value)
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
                            <input type="submit" value="Submit"/>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}