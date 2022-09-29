import React from "react";
import './App.css';
import { Link } from 'react-router-dom';

function Nav(){

    const navStyle = {
        color: 'white',
        textDecoration: 'none'
    }

    return(
        <nav>
            <Link style={navStyle} to='/'>
                <h1>Techsun Engineering</h1>
            </Link>
            <ul className="nav-links">
                <Link style={navStyle} to='/professional'>
                    <li>Professional</li>
                </Link>
                <Link style={navStyle} to='/casual'>
                    <li>Casual</li>
                </Link>
                <Link style={navStyle} to='/about'>
                    <li>About Us</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
