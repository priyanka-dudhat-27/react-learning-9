import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Contact from '../pages/Contact'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes