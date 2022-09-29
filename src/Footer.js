import React from "react";
import './App.css';
import { Link } from 'react-router-dom';


function Footer(){
    const footerStyle = {
        color: "white",
        textDecoration: "none"
    }
    return(
        <footer>
            <ul className="Footer-links">
                <Link style={footerStyle} to= "/services">
                    <li>Services</li>
                </Link>
                <Link style={footerStyle} to= "/contactus">
                    <li>Contact Us</li>
                </Link>
            </ul>
        </footer>
    );
}

export default Footer;