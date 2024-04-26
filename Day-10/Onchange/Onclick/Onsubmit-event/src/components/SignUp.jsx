import React,{useState} from 'react'
import './SignUp.css'

const SignUp = () => {
    const [name,setName]=useState("")
    const [username,setUsername]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
 
    const handleForm=(e)=>{
        e.preventDefault();
        console.log("name:",name,"username:",username,"email:",email,"password:",password)
        console.log(setName(""))
        console.log(setUsername(""))
        console.log(setEmail(""))
        console.log(setPassword(""))
    }

  return (
    <div>
        <form onSubmit={handleForm}>
            <h3>Registration Form</h3>
           <div>
           <input type="text"  placeholder='name' value={name} onChange={(e)=>{setName(e.target.value)}} />
           </div>
           <div> <input type="text" placeholder='username' value={username} onChange={(e)=>setUsername(e.target.value)} /></div>
            <div><input type="email" placeholder='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} /></div>
            <div>
            <input type="password" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
            </div>
            <button>SignUp</button>
        </form>
    </div>
  )
}

export default SignUp