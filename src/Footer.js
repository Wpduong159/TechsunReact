import React from "react";
import './App.css';
import { Link } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// import Link from '@mui/material/Link';


function Footer(){
    const footerStyle = {
        color: "black",
        textDecoration: "none"
    }
    return(
        // <footer>

        // </footer>
        <Box
            sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
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
                    <Typography variant="body1">
                        <ul className="Footer-links">
                            <Link style={footerStyle} to= "/services">
                                <li>Services</li>
                            </Link>
                            <Link style={footerStyle} to= "/contactus">
                                <li>Contact Us</li>
                            </Link>
                            <Link style={footerStyle} to= "/workforus">
                                <li>Work For Us</li>
                            </Link>
                        </ul>
                    </Typography>
                </Container>
            </Box>
        </Box>
    );
}

export default Footer;