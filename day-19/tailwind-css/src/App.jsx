import React from 'react'
import Navbar from './component/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Signup from './pages/Signup'

const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Home/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App