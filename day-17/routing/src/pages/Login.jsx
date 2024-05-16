import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Login = () => {
    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")

    const navigate=useNavigate();

    const handleLogin=(e)=>{
        e.preventDefault()
        console.log(loginEmail,loginPassword)
        
        let email=localStorage.getItem("email")
        let password=localStorage.getItem("password")

        if(loginEmail===email && loginPassword===password){
            alert("Login successfully")
            navigate('/')
        }else{
            alert("Invalid Credential")
        }
        setLoginEmail("")
        setLoginPassword("")
    }
     // show password
     function myFunction() {
        var x = document.getElementById("myInput");
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
      }
  return (
    <div className='container'>
        <form onSubmit={handleLogin} className='form'>
            <h2 className='heading'>Login Form</h2>
            <div>
                <input type="email" placeholder='Enter email' value={loginEmail} onChange={(e)=>setLoginEmail(e.target.value)}/>
            </div>
            <div>
            <input type="password" placeholder='Enter password' id="myInput" value={loginPassword} onChange={(e)=>setLoginPassword(e.target.value)}/><br/>
            <input type="checkBox" onClick={myFunction}/><span style={{color:"red"}}>Show Password</span>
            </div>
            <div>
                <input type="submit" value="submit" className='btn'/>
            </div>
        </form>
    </div>
  )
}

export default Login