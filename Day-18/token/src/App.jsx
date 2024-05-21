import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import PrivateRoutes from './components/PrivateRoutes'

const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Navbar/>
      <Routes>
        
        <Route path='/' element={<PrivateRoutes><Home/></PrivateRoutes>}></Route>
        
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App