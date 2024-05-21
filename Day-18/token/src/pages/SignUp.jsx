import React, { useState } from 'react'

const SignUp = () => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const handleSubmit=(e)=>{
        e.preventDefault();

        console.log(name,email,password)
        setName("")
        setEmail("")
        setPassword("")
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h2>Signup form</h2>
            <div>
                <input type="text" placeholder='Enter username' value={name} onChange={(e)=>setName(e.target.value)} />
            </div>
            <div>
                <input type="email" placeholder='Enter email' value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div>
                <input type="password" placeholder='Enter password' value={password} onChange={(e)=>setPassword(e.target.value)} />
            </div>
            <button type='submit' className='btn'>Submit</button>
        </form>
    </div>
  )
}

export default SignUp