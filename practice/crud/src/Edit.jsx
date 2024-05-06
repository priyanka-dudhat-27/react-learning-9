/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Edit() {
    const { id } = useParams();
    const [data, setData] = useState({}); // Changed to object instead of array
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [city, setCity] = useState('');
    
    useEffect(() => {
        axios.get('http://localhost:8080/users/' + id)
            .then((res) => {
                setData(res.data);
            })
            .catch(err => console.log(err));
    }, [id]); // Added id to dependency array

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic here to handle form submission (e.g., sending updated data to the server)
    };

    return (
        <div>
            <div className='border bg-light p-5'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='id'>ID:</label>
                        <input type="text" name='id' className='form-control' value={data.id} disabled onChange={(e) => { setData({ ...data, id: e.target.value }) }} />
                    </div>
                    <div>
                        <label htmlFor='name'>Name:</label>
                        <input type="text" name='name' className='form-control' value={data.name} onChange={(e) => { setData({ ...data, name: e.target.value }) }} />
                    </div>
                    <div>
                        <label htmlFor="age">Age:</label>
                        <input type="age" name='age' className='form-control' value={data.age} onChange={(e) => { setData({ ...data, age: e.target.value }) }} />
                    </div>
                    <div>
                        <label htmlFor="city">City:</label>
                        <input type="email" name='city' className='form-control' value={data.city} onChange={(e) => { setData({ ...data, city: e.target.value }) }} />
                    </div><br />
                    <button className='btn btn-info text-white'>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Edit;
