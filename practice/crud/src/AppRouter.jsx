/* eslint-disable no-unused-vars */
import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import App from './App'
import Add from './pages/Add'
import Edit from './Edit'

const AppRouter = () => {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/add' element={<Add/>}/>
        <Route path='/update/:id' element={<Edit/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default AppRouter