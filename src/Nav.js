import React from "react";
import './App.css';
import Grid from "@mui/material/Grid";
import AlignVerticalTopIcon from '@mui/icons-material/AlignVerticalTop';
import { Link } from 'react-router-dom';

function Nav(){

    const navStyle = {
        color: 'white',
        textDecoration: 'none'
    }


    return(
        <nav>
            <Link style={navStyle} to='/'>
                <AlignVerticalTopIcon />
                <h1>Techsun Engineering</h1>
            </Link>
            <ul className="nav-links">
                <Link style={navStyle} to='/professional'>
                    <li>Professional</li>
                </Link>
                <Link style={navStyle} to='/casual'>
                    <li>Casual</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
