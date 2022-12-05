import React from "react";
import '../App.css';
import {Clothing} from '../images/imageIndex'
function About(){
    return(
        <div> 
            <section className="top">
            <img className="clothing" src={Clothing} alt = "Clothing rack" />
            <div className="aboutUs">
                <h1>About Us</h1>
                
            </div>
            </section>
            <section className="bottom">
            <div className="aboutUsDiscription">
                <p>Two Cal State Fullerton Univserity Students with a vision.<br></br>
                William Duong and Sebastian Reyes, attempting to create a web application<br></br>
                that can help insipire individuals find their look for a day in the office.<br></br>
                Whether it is business or business casual our application can make <br></br>
                it easier for you to tackle the day!
                </p>
            </div>
            </section>   
        </div>
    );
}

export default About;
