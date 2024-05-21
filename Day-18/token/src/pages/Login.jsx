import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContextProvider'

const Login = () => {
    const [loginEmail,setLoginEmail]=useState("")
    const [loginPassword,setLoginPassword]=useState("")
    const{login}=useContext(AuthContext)

    const handleLogin=(e)=>{
        e.preventDefault()

        fetch("https://reqres.in/api/login",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email:loginEmail,
                password:loginPassword
            })
        }).then((res)=>res.json())
        .then((data)=>{
            console.log(data.token)
            login(data.token)
        })
    }

  return (
    <div>
    <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <div>
            <input type="email" placeholder='Enter email' value={loginEmail} onChange={(e)=>setLoginEmail(e.target.value)} />
        </div>
        <div>
            <input type="password" placeholder='Enter password' value={loginPassword} onChange={(e)=>setLoginPassword(e.target.value)} />
        </div>
        <button type='submit' className='btn'>Submit</button>
    </form>
</div>
  )
}

export default Login