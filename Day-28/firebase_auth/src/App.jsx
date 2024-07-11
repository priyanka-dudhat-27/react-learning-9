/* eslint-disable no-unused-vars */
import React from 'react'
import './App.css'
import Signup from './pages/Signup'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Protected from './components/Protected'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Protected/>}>
            <Route path='/' element={<Home />} />
        </Route>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App