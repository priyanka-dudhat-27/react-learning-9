import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { ADD_TODO, GET_TODO } from '../Redux/ActionType'
import { useDispatch, useSelector } from 'react-redux'

const Todo = () => {
    const [inputData,setInputData]=useState("")
    const dispatch=useDispatch()
    const todoData=useSelector(store=>store.todo)
    console.log(todoData)
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:8080/todo",{
            todo:inputData
        }).then((res)=>{
            console.log("data added successfully")
            dispatch({type:ADD_TODO,payload:res.data})
            setInputData("")
        })  
    }

    useEffect(() => {
     axios.get("http://localhost:8080/todo")
     .then((res)=>{
        console.log(res.data)
        dispatch({type:GET_TODO,payload:res.data})
     })
    }, [])
    
  return (
    <div>
        <h2>TODO with Redux</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='enter your task' value={inputData} onChange={(e)=>{setInputData(e.target.value)}} />
            <button>Add</button>
        </form>

        {
            todoData.map((item)=>{
                return(
                    <div key={item.id}>
                        <h3>{item.todo}</h3>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Todo