import React ,{useState} from 'react'

const Counters = () => {
    const [count,setCount]= useState(10)
    const handleAdd=()=>{
        setCount(count+1)
    }
  return (
    <div>
        <h2>Counter App</h2>
        <h2>{count}</h2>
        <button onClick={handleAdd}>Add</button>
        <button onClick={()=>{setCount(count-1)}}>Sub</button>
    </div>
  )
}

export default Counters