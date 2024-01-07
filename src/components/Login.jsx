import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Login() {

    const [username,setUsername]=useState('')
    const [password,SetPassword]=useState('')

    const {setUser}=useContext(UserContext)

    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({username,password}) //data send kr rahe hai

    }
  return (
    <div>
        <h2>LogIn</h2>
        <input type='text' 
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        placeholder="username"/>

        {"                 "}
        
        <input type='password' 
        value={password}
        onChange={(e)=>SetPassword(e.target.value)}
        placeholder="password"/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login