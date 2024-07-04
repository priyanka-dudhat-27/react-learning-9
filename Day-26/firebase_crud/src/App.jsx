/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import './App.css'

import { database } from '../src/FirebaseFirestore/config'
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore'

const App = () => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [age, setAge] = useState("");
    const [id, setId] = useState("");
    const [val, setVal] = useState([])
    const [show,setshow] = useState(false)

    const value = collection(database, "demo")

    useEffect(() => {
        const getData = async () => {
            const dbval = await getDocs(value)
            setVal(dbval.docs.map(doc => ({ ...doc.data(), id: doc.id })))
        }
        getData()
    })

    const handleCreate = async () => {
        await addDoc(value, { name1: fname, name2: lname ,name3:age})
        const dbval = await getDocs(value)
        setVal(dbval.docs.map(doc => ({ ...doc.data(), id: doc.id })))

        setFname("")
        setLname("")
        setAge("")
    }

    const handleDelete = async (id) => {
       const deleteData=doc(database,"demo",id)
       await deleteDoc(deleteData)
    }

    const handleEdit=async(id,name1,name2,name3) => {
       setFname(name1)
       setLname(name2)
       setAge(name3)
       setId(id)

       setshow(true)

    }

    const handleUpdate=async()=>{
      const updateData=doc(database,"demo",id)
      await updateDoc(updateData,{name1:fname,name2:lname,name3:age})

      setshow(false)
      setFname("")
      setLname("")
      setAge("")
      setAge("")

    }
    return (
      
        <div className='container'>
          <h1>Firebase Crud Operation</h1>
            <input type='text' value={fname} onChange={(e) => setFname(e.target.value)} className='input-field' placeholder='Enter first name' />
            <input type='text' value={lname} onChange={(e) => setLname(e.target.value)} className='input-field' placeholder='Enter last name'/>
            <input type='text' value={age} onChange={(e) => setAge(e.target.value)} className='input-field' placeholder='Enter age' />
            {
              !show ? <button onClick={handleCreate} className='button create-btn'>Create</button>:<button onClick={handleUpdate} className='button update-btn'>Update</button>
            }
            <div className='data-list'>
                {val.map(values => (
                    <div key={values.id}>
                        <h2>{values.name1} {values.name2}</h2>
                        <h2>Age:{values.name3}</h2>
                        <div className='btn-container'>
                        <button onClick={()=>handleDelete(values.id)} className='button del-btn'>Delete</button>
                        <button onClick={()=>handleEdit(values.id,values.name1,values.name2,values.name3)} className='button edit-btn'>Edit</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default App
