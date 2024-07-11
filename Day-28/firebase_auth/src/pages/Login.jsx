/* eslint-disable no-unused-vars */
import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import {Link, useNavigate} from "react-router-dom"
import { auth } from '../FirebaseFirestore/config'

const Login = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const handlesubmit=async (e)=>{
        e.preventDefault();
        console.log(email,password)

        try {
          await signInWithEmailAndPassword(auth,email,password)
        } catch (error) {
          console.log(error)
        }

        setEmail("")
        setPassword("")
    }
  return (
    <div>
        <h2>Login Page</h2>
        <form onSubmit={handlesubmit}>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter email' /> <br /> <br />
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter password' /> <br /><br />
                
            <button>Submit</button>
            <p>Need to Login ? <Link to="/signup">Signup</Link></p>
        </form>
    </div>
  )
}

export default Login