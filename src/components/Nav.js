import React from "react";
import '../App.css';
import AlignVerticalTopIcon from '@mui/icons-material/AlignVerticalTop';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';


function Nav(){

    const navStyle = {
        color: 'white',
        textDecoration: 'none'
    }

    return(
        <nav>
            <Link style={navStyle} to='/'>
                <Grid container direction="row" alignItems="center" justify="space-around">
                    <AlignVerticalTopIcon className="headerLogo"/>
                    <h1>Techsun Engineering</h1>
                </Grid>
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
