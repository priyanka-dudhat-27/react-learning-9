import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {
  const count=useSelector((store)=>store.count)
  const dispatch=useDispatch()
  console.log(count)
  return (
    <div>
        <h2>Counter with Redux</h2>
        <button onClick={()=>{dispatch(type="INCREMENT")}}>Increment</button>
        <button>Decrement</button>
        <button>Reset</button>
    </div>
  )
}

export default Counter