import React from "react";
import './App.css';
import { Link } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


function Copyright() {
    const footerStyle = {
        color: 'black',
        textDecoration: 'none'
    }
    return (
        <div>
            Copyright ©
            {' '}<Link style={footerStyle} to="/">
                Techsun Engineering
            </Link>{' '}
            {new Date().getFullYear()}.
        </div>
    );
}


function Footer(){
    const footerStyle = {
        color: "black",
        textDecoration: "none"
    }
    return(
        <Box
            sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '15vh',
            }}
        >
            <CssBaseline />
            <Box
                component="footer"
                sx={{
                py: 1,
                px: 2,
                mt: 'auto',
                backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                    ? theme.palette.grey[200]
                    : theme.palette.grey[800],
                }}
            >
                <Container maxWidth="sm">
                    <ul className="footer-links">
                        <Link style={footerStyle} to= "/services">
                            <li>Services</li>
                        </Link>
                        <Link style={footerStyle} to= "/contactus">
                            <li>Contact Us</li>
                        </Link>
                        <Link style={footerStyle} to='/about'>
                            <li>About Us</li>
                        </Link>
                    </ul>
                    <Copyright />
                </Container>
            </Box>
        </Box>
    );
}

export default Footer;