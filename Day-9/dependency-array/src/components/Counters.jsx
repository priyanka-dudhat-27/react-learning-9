import React, { useEffect, useState } from 'react'

const Counters = () => {
    const [count,setCount]=useState(0)

    // use
    useEffect(()=>{
        setCount(count+1)
    },[])

    const handleCount=()=>{
        setCount(count+1)
    }
  return (
    <div>
        <h1>Counter</h1>
        <h2>{count}</h2>
        <button onClick={handleCount}>Count</button>
    </div>
  )
}

export default Counters