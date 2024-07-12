/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

const Home = () => {
    const [name, setName] = useState("");
    const [author, setAuthor] = useState("");
    const [users, setUsers] = useState([]);
    const [editmode, setEditmode] = useState(false)
    const [editUserId,seteditUserId]=useState(null)

    const handleSubmit = (e) => {
        e.preventDefault();

        if(editmode){
            fetch(`http://localhost:8080/users/${editUserId}`,{
                method:"PUT",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({
                    name: name,
                    author: author
                })
            }).then((res)=>res.json())
            .then((data)=>{
                console.log(data)
                setEditmode(false)
                seteditUserId(null)
                setName("")
                setAuthor("")
                fetchUsers() // Fetch users after updating a user
            }).catch((error) => {
                console.log(error);
            });
        }else{
            fetch("http://localhost:8080/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: name,
                    author: author
                })
            })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                alert("Data added successfully");
                setName("");
                setAuthor("");
                fetchUsers(); // Fetch users after adding a new one
            })
            .catch((error) => {
                console.log(error);
            });
        }

       
    };

    const fetchUsers = () => {
        fetch("http://localhost:8080/users")
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setUsers(data);
        })
        .catch((error) => {
            console.log(error);
        });
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleDelete = (id) => {
        fetch(`http://localhost:8080/users/${id}`, {
            method: "DELETE"
        })
        .then((res) => {
            alert("Data deleted successfully");
            fetchUsers(); // Fetch users after deleting one
        })
        .catch((error) => {
            console.log(error);
        });
    };

    const handleEdit=(user)=>{
        setName(user.name)
        setAuthor(user.author)
        setEditmode(true)
        seteditUserId(user.id)

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter book name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Enter author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                <button>{editmode ?"Update":"Submit"}</button>
            </form>

            <div>
                {users.map((item) => (
                    <div key={item.id}>
                        <h2>{item.name}</h2>
                        <p>{item.author}</p>
                        <button onClick={() => handleDelete(item.id)}>Delete</button>
                        <button onClick={()=>handleEdit(item)}>Update</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
