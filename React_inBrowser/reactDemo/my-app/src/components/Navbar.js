import React from 'react'
import './navbar.css'

const Navbar = (props) => {
    return (
        <div className='nav'>
            <h1>{props.heading}</h1>
        </div>
    )
}

export default Navbar
