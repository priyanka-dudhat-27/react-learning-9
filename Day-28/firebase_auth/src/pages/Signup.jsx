/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import {Link, useNavigate} from "react-router-dom"
import { auth } from '../FirebaseFirestore/config'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const Signup = () => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate()

    const handlesubmit=async (e)=>{
        e.preventDefault();
        const userCredential=await createUserWithEmailAndPassword(auth,email,password)
        const user=userCredential.user;

        localStorage.setItem("token",user.accessToken);
        localStorage.setItem("user",JSON.stringify(user));
        navigate("/");
    }
  return (
    <div>
        <h2>Signup Page</h2>
        <form onSubmit={handlesubmit}>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter username' />  <br /> <br />
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter email' /> <br /> <br />
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter password' /> <br /><br />
                
            <button>Submit</button>
            <p>Need to Login ? <Link to="/login">Login</Link></p>
        </form>
    </div>
  )
}

export default Signup