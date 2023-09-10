import { Link, Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function NavBar({ homePage, setHomePage, token, setToken, username, cartPage, setCartPage }){
    const [error, setError] = useState(null)

    return(
        <>
            <header className="container">
                <div className="navbar">
                    <div className="storeName">
                        <h1><Link to='/' className="linkColor" onClick={()=>{
                            setHomePage(true)
                            setError(null) }}>FusionNova</Link></h1>
                    </div>
                    <div className='userName'>
                        {token ? <p>{sessionStorage.getItem("username")}</p> : <p></p>}
                        {error && <p>{error}</p>}
                    </div>
                    <div className="userButtons">
                        {!token ? <button><Link to='/login' className="linkColor" onClick={() =>{setError(null)}}>Login</Link></button> : <button><Link to='/logout' className="linkColor">LogOut</Link></button>}

                        {((cartPage) && sessionStorage.getItem("token") === null) ? <button><Link to='/cart' className="linkColor" onClick={() =>{
                            setCartPage(true);
                            setError("Please Login before Checkout.")
                        }}>Checkout</Link></button> : ((cartPage) && !(sessionStorage.getItem("token") === null)) ? <button><Link to='/checkout' className='linkColor' onClick={() =>{
                            setCartPage(true)
                            setError(null)
                        }}>Checkout</Link></button> : <button><Link to='/cart' className="linkColor" onClick={() =>{
                            setCartPage(true);
                            setError(null)
                        }}>Cart</Link></button>}
                        {/* {((location.pathname === '/cart') && !(sessionStorage.getItem("token") === null)) ? <button><Link to='/checkout' className='linkColor'>Checkout</Link></button> : <button><Link to='/cart' className="linkColor">Cart</Link></button>} */}
                    </div>
                </div>
            </header>
            <Outlet />
        </>
    )
}
