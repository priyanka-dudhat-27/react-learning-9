import React, { useState, useEffect } from "react";

const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUser] = useState([]);

  const handleSubmit=(e)=>{
    e.preventDefault()
    fetch("http://localhost:8000/users", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name:name,
        email:email,
      })
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("data added successfully");
        // setUser(data);
        setName("")
        setEmail("")
       
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(()=>{
    fetch(`http://localhost:8000/users`)
    .then(res=>res.json())
    .then((data)=>{
      console.log(data)
      setUser(data)
    })
    .catch((err)=>console.log(err))
  },[])

  const handleAsc=()=>{
    const ascData=users.sort((a,b)=>a.price-b.price)
    setUser([...users],ascData)
  }
  const handleDes=()=>{
    const desData=users.sort((a,b)=>b.price-a.price)
    setUser([...users],desData)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Login Form</h2>
        <div>
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <br />
        <div>
          <input type="submit" />
        </div>
      </form>

      {/* searching */}
      
    

      {/* sorting */}
      <div>
        <button onClick={handleAsc}>Ascending</button>
        <button onClick={handleDes}>Descending</button>
      </div>

      <div>
        {users.map((item, index) => {
          return (
            <div key={index}>
              <img src={item.thumbnail} alt="" />
              <h3>{item.price}</h3>
              <h3>{item.brand}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
