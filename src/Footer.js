import React from "react";
import './App.css';
import { Link } from 'react-router-dom';


function Copyright() {
    const footerStyle = {
        color: 'white',
        textDecoration: 'none'
    }
    return (
        <div style={footerStyle}>
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
        color: "white",
        textDecoration: "none"
    }
    return(
        <footer className="footer">
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
        </footer>
    );
}

export default Footer;