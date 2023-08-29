import { Link, Outlet } from 'react-router-dom'

export default function NavBar(){
    return(
        <>
            <header className="container">
                <div className="navbar">
                    <div className="storeName">
                        <h1><Link to='/' className="linkColor">E-Commerce Store</Link></h1>
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