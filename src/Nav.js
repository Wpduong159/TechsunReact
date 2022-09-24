import React from "react";
import './App.css';

function Nav(){
    return(
        <nav>
            <h1>NAV TITLE</h1>
            <ul className="nav-links">
                <li>Professional</li>
                <li>Casual</li>
                <li>About Us</li>
            </ul>
        </nav>
    );
}

export default Nav;
