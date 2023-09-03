import { Link, Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function NavBar({ homePage, setHomePage, token, setToken }){
    return(
        <>
            <header className="container">
                <div className="navbar">
                    <div className="storeName">
                        <h1><Link to='/' className="linkColor" onClick={()=>{setHomePage(true)}}>FusionNova</Link></h1>
                    </div>
                    <div className="userButtons">
                    {!token ? <button><Link to='/login' className="linkColor">Login</Link></button> : <button><Link to='/logout' className="linkColor">LogOut</Link></button>}
                        <button><Link to='/cart' className="linkColor">Cart</Link></button>
                    </div>
                </div>
            </header>
            <Outlet />
        </>
    )
}