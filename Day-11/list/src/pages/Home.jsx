import React, { useEffect, useState } from 'react'

const Home = () => {
    const [product,setProduct]=useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data);
            setProduct(data)
        })
    },[])
  return (
    <div>
        <h2>LIST</h2>
        <ul>
            {
                product.map((item,index)=>{
                    return<div key={item.id}>
                        <li>
                            {item.title}
                            <ol>
                                <li>{item.userId}</li>
                                <li>{item.title}</li>
                            </ol>
                        </li>
                      </div>
                })
            }
        </ul>
    </div>
  )
}

export default Home