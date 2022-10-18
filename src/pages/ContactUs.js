import React from "react";
import '../App.css';
import {Skyward} from '../images/imageIndex';

function ContactUs(){
    return(
        <div>
            <section className= "top">
                <img className = "skyward" src={Skyward} alt = "Skyline background" />
                <div className="contactTitle">
                    <h1>Contact Us</h1>
                </div>
            </section>
            <section className="emailSection">
                <h2> Business Inquiries: engineering.techsun@gmail.com</h2>
                <h3>wpduong@csu.fullerton.edu <br></br>
                    sreyes92@csu.fullerton.edu
                </h3>

            </section>
        </div>
    );
}

export default ContactUs;
