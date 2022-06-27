import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import {GiFoodTruck} from 'react-icons/gi'

export default function Navbar() {
    return (
        <nav>
            <div className='navbar'> 
                <Link to="/" className='nav-link'>Home</Link>
                <i className='brand'><GiFoodTruck/></i>
                <Link to="save" className='nav-link'>Book</Link>
            </div>
        </nav>
    )
}
