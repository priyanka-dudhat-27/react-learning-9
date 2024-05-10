import React,{useState} from 'react'

const Form = () => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")

    
  return (
    <div>
        <h2>Form validation</h2>
        <form>
            <div>
            <input type="text" placeholder='Enter name' value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div>
            <input type="email" placeholder='Enter email' value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <br />
            <input type="submit" value="submit"/>
        </form>
    </div>
  )
}

export default Form