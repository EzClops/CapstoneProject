import { Link, Outlet } from 'react-router-dom'

export default function NavBar(){
    return(
        <>
            <header className="container">
                <div className="navbar">
                    <div className="storeName">
                        <h1><Link to='/'>E-Commerce Store</Link></h1>
                    </div>
                    <div className="userButtons">
                        <button><Link to='/login'>Login</Link></button>
                        <button><Link to='/cart'>Cart</Link></button>
                    </div>
                </div>
            </header>
            <Outlet />
        </>
    )
}