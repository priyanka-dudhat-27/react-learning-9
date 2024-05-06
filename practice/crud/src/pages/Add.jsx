/* eslint-disable no-unused-vars */
import axios from 'axios';
import React ,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

export default function Add() {
  const[name,setName]=useState("")
  const[age,setAge]=useState("")
  const[city,setCity]=useState("")

  const navigate=useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:8080/users',{
      name,age,city
    })
    .then((res)=>{
      alert('data added successfully')
      navigate('/')
    })
    .catch((err)=>console.log(err))
  }
  return (
    <div>
      <div className='border bg-light p-5'>
      <form onSubmit={handleSubmit}>
      <div>
          <label htmlFor='name'>Name:</label>
          <input type="text" name='name' className='form-control' value={name} onChange={(e)=>{setName(e.target.value)}} />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input type="age" name='age' className='form-control' value={age} onChange={(e)=>{setAge(e.target.value)}}/>
        </div>
        <div>
          <label htmlFor="city">City:</label>
          <input type="email" name='city' className='form-control' value={city} onChange={(e)=>{setCity(e.target.value)}}/>
        </div><br />
        <button className='btn btn-info text-white'>Submit</button>
      </form>
      </div>
    </div>
  )
}
