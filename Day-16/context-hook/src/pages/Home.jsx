import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Home = () => {
    const {theme,handleThemeChange}=useContext(ThemeContext)
    console.log("theme",theme)
  return (
    <div style={{backgroundColor:theme?"black":"white",width:"100vw",height:"100vh"}}>
        <button onClick={handleThemeChange} >Theme</button>
    </div>
  )
}

export default Home