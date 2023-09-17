import { Link, Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

export default function NavBar({ homePage, setHomePage, token, cartPage, setCartPage, checkoutPage, setCheckoutPage, submitAddress, submitPayment, setError, setSubmitAddress, setSubmitPayment }){
    
    const navigate = useNavigate();

    return(
        <>
            <header className="container">
                <div className="navbar">
                    <div className="storeName">
                        <h1><Link to='/' className="linkColor" onClick={()=>{
                            setHomePage(true)
                            setError(null)
                            setCartPage(false)
                            setCheckoutPage(false)
                            setSubmitAddress(false)
                            setSubmitPayment(false)
                        }}>FusionNova</Link></h1>
                    </div>
                    <div className='userName'>
                        {token ? <p>{sessionStorage.getItem("username")}</p> : <p></p>}
                    </div>
                    <div className="userButtons">
                        {!token 
                            ? <button><Link to='/login' className="linkColor" onClick=
                                {() =>{
                                    setError(null)
                                    setCartPage(false)
                                    setCheckoutPage(false)
                                    setSubmitAddress(false)
                                    setSubmitPayment(false)
                                }}>Login</Link></button> 
                            : <button><Link to='/logout' className="linkColor" onClick=
                                {() =>{
                                    setCartPage(false)
                                    setCheckoutPage(false)
                                }}>LogOut</Link></button>
                        }

                        {(cartPage && sessionStorage.getItem("token") === null) 
                            ? <button><Link to='/cart' className="linkColor" onClick=
                                {() =>{
                                    setCartPage(true);
                                    setError("Please Login before Checkout.")
                                }}>Checkout</Link></button> 
                        : ((cartPage) && !(sessionStorage.getItem("token") === null)) 
                            ? <button><Link to='/checkout' className='linkColor' onClick=
                                {() =>{
                                    setCheckoutPage(true)
                                    setCartPage(false)
                                    setError(null)
                                }}>Checkout</Link></button>
                        : ((checkoutPage) && !(sessionStorage.getItem("token") === null)) 
                            ? <button onClick=
                                {() =>{
                                    if(submitAddress && submitPayment){
                                        setCartPage(false)
                                        setCheckoutPage(false)
                                        setError(null)
                                        navigate('/placeorder')
                                    }else{
                                        setError("Complete both Address and Payment form to place order")
                                        throw new Error("Complete both Address and Payment form to place order")
                                    }
                                }}>Place your order</button> 
                        : <button><Link to='/cart' className="linkColor" onClick=
                                {() =>{
                                    setCartPage(true);
                                    setError(null)
                                }}>Cart</Link></button>}
                    </div>
                </div>
            </header>
            <Outlet />
        </>
    )
}
