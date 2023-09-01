import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";


export default function Login(){
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null)

    const min = 6;
    const max = 16;

    // console.log(username)
    async function handleSubmit(event){
        event.preventDefault();
        try{
            formValidate(username, password);
            console.log(username)
            const response = await fetch("https://fakestoreapi.com/auth/login",{
                method:'POST',
                headers: {
                    'Content-Type': 'application/json'
                  },
                body:JSON.stringify({
                    username: `${username}`,
                    password: `${password}`
                })
            });
            console.log(response)
            const result = await response.json();
            console.log(result);
        }catch(error){
            setError(error)
            console.error(error)
        }
    }

    function formValidate(username, password){
        //validate for user inputing characters under 8
        if (username.length < min || password.length < min){
            throw new Error("Username or password input needs to be greater than 8 and less than 16 characters. Please Try Again.");
        //validate for user inputing characters above 16
        } else if(username.length > max || password.length > max){
            throw new Error("Username or password input needs to be greater than 8 and less than 16 characters. Please Try Again.")
        //validate for user inputing a space into input text
        } else if(username.includes(" ") || password.includes(" ")){
            setError("");
            throw new Error("Username and password cannot accept spaces. Please Try Again.")
        }
    }

    return(
        <>
            <div className="container loginRegister">
                <div className="Login_Register">
                    <button><h2>Login</h2></button>
                    <h2>|</h2>
                    <span><button><h2><Link to='/register' className="linkColor">Register</Link></h2></button></span>
                </div>
                <form onSubmit={handleSubmit}>
                    {/* <label>
                        <input required value={email} placeholder="Email or Username" onChange={e =>{
                            setEmail(e.target.value)
                        }}/>
                    </label> */}
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
                    <input type="submit" value="Submit"/>
                </form>
                {/* {error && <p>{error}</p>} */}
            </div>
            {/* <button onClick={handleSubmit}>Hi</button> */}
        </>
    )
}