import { Link, Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function NavBar({ homePage, setHomePage }){
    return(
        <>
            <header className="container">
                <div className="navbar">
                    <div className="storeName">
                        <h1><Link to='/' className="linkColor" onClick={()=>{setHomePage(true)}}>FusionNova</Link></h1>
                    </div>
                    <div className="userButtons">
                        <button><Link to='/login' className="linkColor">Login</Link></button>
                        <button><Link to='/cart' className="linkColor">Cart</Link></button>
                    </div>
                </div>
            </header>
            <Outlet />
        </>
    )
}