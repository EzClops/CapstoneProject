import { useState } from "react"
import { useNavigate } from 'react-router-dom'

export default function Login(){
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(event){
        event.preventDefault();
        try{
            const response = await fetch('https://fakestoreapi.com/users',{
                method:"POST",
                body:JSON.stringify(
                    {
                        email: email,
                        username: username,
                        password: password,
                    }
                )
            })
            const result = await response.json();
            console.log(result);
        }catch(error){
            console.error(error)
        }
    }

    return(
        <>
            
            <form onSubmit={handleSubmit}>
                <label>
                    <input required value={email} placeholder="Email or Username" onChange={e =>{
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
                <input type="submit" value="Submit"/>
            </form>
            {/* <button onClick={handleSubmit}>Hi</button> */}
        </>
    )
}