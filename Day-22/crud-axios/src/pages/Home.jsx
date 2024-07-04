import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Home = () => {
  const [todo,setTodo]=useState("")
  const [data,setData]=useState([])

  // create 
  const handlsubmit=(e)=>{
    e.preventDefault()
    console.log(todo)

    axios.post("  http://localhost:3000/todo",{
      todo:todo
    }).then((res)=>{
      console.log("data added successfully")
      fetchData()
      setTodo("")
    })
  }

  // read

  const fetchData=()=>{
    axios.get("http://localhost:3000/todo")
    .then((res)=>{
      console.log(res.data.reverse())
      setData(res.data)
    })
    .catch((err)=>console.log(err,"something wrong"))
  }

  useEffect(()=>{
    fetchData();
  },[])

  // delete
  const handleDelete=(id)=>{
    axios.delete(`http://localhost:3000/todo/${id}`)
    .then((res)=>{
      console.log("data deleted successfully")
      setData(data.filter((item)=>item.id!==id))
    })
  }

  // edit

  return (
    <div>
     <form onSubmit={handlsubmit}>
     <h1>Todo App</h1>
      <input type="text" placeholder='Enter todo' onChange={(e)=>{setTodo(e.target.value)}} value={todo} />
      <button>Save</button>
     </form>

     <div>
      {
       data.map((item,index)=>{
        return(
          <div key={index}>
            <h2>{item.todo}</h2>
            <button onClick={()=>{handleDelete(item.id)}}>Delete</button>
            <button onClick={()=>{handleEdit(item.id)}}>Edit</button>
          </div>
        )
       })
      }
     </div>
    </div>
  )
}

export default Home