import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Signup = () => {
    const [username, setUsername] = useState("")
    const [confirmpass, setConfirmPass] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate=useNavigate()

    const emailRegEx= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const passRegEx= /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/

    const handleSubmit=(e)=>{
        e.preventDefault()

        // validation
        if(!username||!email||!password||!confirmpass){
            alert('please fill all fields')
        }

        if(confirmpass!==password){
            alert('password & cconfirm password not match')
        }else  if(!passRegEx.test(password)){
            alert('[7 to 15 characters which contain at least one numeric digit and a special character]')
        }

        if(!emailRegEx.test(email)){
            alert('Invalid Email')
        } else if(password===confirmpass) {
            console.log(username,email,password,confirmpass)
            localStorage.setItem("email",email)
            localStorage.setItem("password",password)
            navigate('/login')
            setEmail("")
            setPassword("")
            setConfirmPass("")
            setUsername("")
        }
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
    <div>
         <form onSubmit={handleSubmit} className='form'>
            <h2 className='heading'>SignUp</h2>
            <div>
                <input type="text" placeholder='Enter username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
            </div>
            <div>
                <input type="email" placeholder='Enter email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div>
            <input type="password" placeholder='Enter password' id="myInput" value={password} onChange={(e)=>setPassword(e.target.value)}/><br/>
            <input type="checkBox" onClick={myFunction}/><span style={{color:"red"}}>Show Password</span>
            </div>
            <div>
                <input type="password" placeholder='Enter confirm password' value={confirmpass} onChange={(e)=>setConfirmPass(e.target.value)}/>
            </div>
            <div>
                <input type="submit" value="submit" className='btn'/>
            </div>
        </form>
    </div>
  )
}

export default Signup