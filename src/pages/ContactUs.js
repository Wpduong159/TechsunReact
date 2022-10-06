import React from "react";
import '../App.css';
import {Skyward} from '../images/imageIndex';

function ContactUs(){
    return(
        <div>

            <img className = "skyward" src={Skyward} alt = "Skyline background" />
            <div className="contactTitle">
                <h1>Contact Us</h1>
            </div>
        </div>
    );
}

export default ContactUs;
