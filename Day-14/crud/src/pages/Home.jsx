import React, { useState, useEffect } from "react";

const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const[edit,setEdit]=useState(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/users", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Data added successfully");
        setName("");
        setEmail("");
        // Update users state with the new data
        setUsers([...users, data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetch(`http://localhost:8000/users/?q=${search}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      })
      .catch((err) => console.log(err));
  }, [search]);

  const handleAsc = () => {
    const ascData = [...users].sort((a, b) => a.price - b.price);
    setUsers(ascData);
  };

  const handleDes = () => {
    const desData = [...users].sort((a, b) => b.price - a.price);
    setUsers(desData);
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:8000/users/${id}`, {
      method: "delete",
    })
      .then((res) => {
        if (res.ok) {
          // Remove the deleted user from the users state
          const updatedUsers = users.filter((user) => user.id !== id);
          setUsers(updatedUsers);
          alert("Data deleted successfully");
        } else {
          throw new Error("Failed to delete data");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to delete data");
      });
  };

  const handleEdit=(id)=>{
    const edited=users.find((item)=>item.id===id)
    setEdit(edited)
  }
console.log(edit)

const handleUpdate=()=>{
  fetch(`http://localhost:8000/users/${edit.id}`,{
    method:"put",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(edit)
  })
  .then((res)=>res.json())
  .then((data)=>{
    console.log(data)
    window.location.reload()
  })
  .catch(error=>console.log('Error',error))
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
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br />
        <div>
          <input type="submit" />
        </div>
      </form>

      {/* Sorting */}
      <div>
        <button onClick={handleAsc}>Ascending</button>
        <button onClick={handleDes}>Descending</button>
      </div>

      {/* Searching */}
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ margin: "10px" }}
      />

      <div style={{display:"flex"}}>
     <div>
         
     {users.map((user) => (
        <div key={user.id} style={{ margin: "10px" }}>
          <img src={user.thumbnail} alt="" />
          <h3>{user.id}</h3>
          <h3>{user.price}</h3>
          <h3>{user.title}</h3>
          <div>
        {
          edit && edit.id === user.id && <div> <input type="text" placeholder="edit data" value={edit.title} onChange={(e)=>setEdit({...edit,title:e.target.value})}/>
          <button onClick={handleUpdate}>Update</button>
          </div>
        }
        
      </div>
          <h3>{user.brand}</h3>
          <h3>{user.stock}</h3>
          <button
            onClick={() => handleDelete(user.id)}
            style={{ margin: "5px", background: "#eee", color: "red" }}
          >
            Delete
          </button>

          <button onClick={()=>handleEdit(user.id)} style={{ margin: "5px", background: "#eee", color: "green" }}>Edit</button>
        
        </div>
      ))}
     </div>
     
      </div>

    </div>
  );
};

export default Home;
