/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import { auth } from '../FirebaseFirestore/config'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'

const Home = () => {
    const navigate=useNavigate()
   const handleLogout=async()=>{
    await signOut(auth)

    localStorage.removeItem("user")
    localStorage.removeItem("token")

    navigate("/login")
   }
  return (
    <div>
        <h2>Welcome to User firebase Auth using Email and password</h2>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Home