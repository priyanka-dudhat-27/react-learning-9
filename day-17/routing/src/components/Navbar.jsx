import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className="navbar">
            <div>
                <img src="https://media.istockphoto.com/id/1345681613/vector/creative-people-logo-vector-illustration-design-editable-resizable-eps-10.jpg?s=612x612&w=0&k=20&c=9XUHICA1ljbxBcLw8ERp0kDDxLNQ8Bp2yR4aUSS6SBs=" alt="" width="120" height="50" />
            </div>
            <div>
                <ul className='nav-menu'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/signup">Signup</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar