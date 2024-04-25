import React, { useEffect, useState } from 'react'

const Home = () => {
    const [count,setCount]=useState(0)
    useEffect(()=>{
        // setCount(count+1) *this line can go infinite
        console.log(count)
    },[count])
  return (
    <div>
        <h2>Counter</h2>
        <h2>{count}</h2>
        <button onClick={()=>{setCount(count+1)}}>Count</button>
    </div>
  )
}

export default Home