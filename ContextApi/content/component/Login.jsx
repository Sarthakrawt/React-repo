import React, { useContext,useState } from 'react'
import TodoContext from '../context/TodoContext'

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {setUser} = useContext(TodoContext); 
    const handleSumit = (e)=>{
        e.preventDefault();
     setUser({username, password});
     console.log(password);
   
    }
    return (
        <>
         <input type='text' 
         onChange={(e)=> setUsername(e.target.value)}
        ></input>
        <input type='text' 
         onChange={(e)=> setPassword(e.target.value)}
        ></input>
        <button onClick={handleSumit}>submit</button>
        </>
       
    )
}

export default Login
