/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Home() {
    const [columns, setColumns] = useState([]);
    const [records, setRecords] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/users')
            .then((res) => {
                setColumns(Object.keys(res.data[0]));
                setRecords(res.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className='container'>
            <Link to="/add"><button className='bg-info text-white'>Create +</button></Link>
            <table className='table table-hover border border-5'>
                <thead>
                    <tr>
                        {columns.map((item, index) => (
                            <th key={index}>{item}</th>
                        ))}
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {records.map((item, index) => (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.city}</td>
                            <Link to="/delete" className='btn bg-danger text-white '>Delete</Link>
                            <Link to={`/update/${id}`} className='btn bg-success text-white'>Update</Link>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
