import React from "react";
import '../App.css';
import {Skyward} from '../images/imageIndex';
import Grid from '@mui/material/Grid'; // Grid version 1
import Item from '@mui/material/ListItem';


function ContactUs(){
    return(
        <div>
            <section className= "top">
                <img className = "skyward" src={Skyward} alt = "Skyline background" />
                <div className="contactTitle">
                    <h1>Contact Us</h1>
                    <h2>Below</h2>
                </div>
            </section>
            <section className="emailSection">
                <Grid container direction="row" justifyContent='center' alignItems='center'>
                    <Grid item md className="supportGridItems">
                        <Item >Business Inquiries engineering.techsun@gmail.com</Item>
                    </Grid>
                    <Grid item md className="supportGridItems">
                        <Item>Senior Software Developer: wpduong@csu.fullerton.edu</Item>
                    </Grid>
                    <Grid item md className="supportGridItems">
                        <Item>Junior Software Developer: sreyes92@csu.fullerton.edu</Item>
                    </Grid> 
                </Grid>                                

            </section>
        </div>
    );
}


export default ContactUs;
