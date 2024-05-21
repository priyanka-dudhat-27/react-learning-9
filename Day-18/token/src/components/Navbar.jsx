import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { AuthContext } from '../context/AuthContextProvider'

const Navbar = () => {
  const {logout}=useContext(AuthContext)
  return (
    <div className='navbar'>
        <div>
            <img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.44546679.1716163200&semt=sph" alt="" width="80" />
        </div>
        <div>
            <ul className='nav-menu'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/signup">SignUp</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><button onClick={logout}>Logout</button></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar