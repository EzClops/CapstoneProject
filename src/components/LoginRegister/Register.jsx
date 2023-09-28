import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";
import { getAllProducts, getAllUsers } from "../../API/apiCalls"

export default function Login(){
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');


    
    async function handleRegister(event){
        event.preventDefault();
        try{
            const response = await fetch('https://fakestoreapi.com/users',{
                method:"POST",
                headers: {
                    'Content-Type': 'application/json'
                  },
                body:JSON.stringify(
                    {
                        email: email,
                        username: username,
                        password: password,
                    })
            })
            const result = await response.json();
            console.log(result);
        }catch(error){
            console.error(error)
        }
    }

    getAllProducts()
    getAllUsers()
    
    return(
        <>
            <div className="container loginRegister">
                <div className="Login_Register">
                    <span><button><h2><Link to='/login' className="linkColor">Login</Link></h2></button></span>
                    <h2>|</h2>
                    <button><h2>Register</h2></button>
                </div>
                <form onSubmit={handleRegister}>
                    <label>
                        <input required value={email} placeholder="Email" onChange={e =>{
                            setEmail(e.target.value)
                        }}/>
                    </label>
                    <label>
                        <input required value={username} placeholder="Username" onChange={e =>{
                            setUsername(e.target.value)
                        }}/>
                    </label>
                    <label>
                        <input required value={password} placeholder="Password" onChange={e =>{
                            setPassword(e.target.value)
                        }}/>
                    </label>
                    <label>
                        <input required value={password2} placeholder="Confirm Password" onChange={e =>{
                            setPassword2(e.target.value)
                        }}/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        </>
    )
}