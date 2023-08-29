import { Link } from "react-router-dom"

export default function Home(){
    return(
        <>
            <div className="container">
                <button><Link to='/mens_apparel' className="linkColor">Men's Apparel</Link></button>
                <button><Link to='/womans_apparel' className="linkColor">Woman's Apparel</Link></button>
                <button><Link to='/electronics' className="linkColor">Electronics</Link></button>
                <button><Link to='/accessories' className="linkColor">Accessories</Link></button>
            </div>
        </>
    )
}