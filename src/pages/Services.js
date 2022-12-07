import React from "react";
import '../App.css';
import { Office } from "../images/imageIndex";
import Grid from '@mui/material/Grid'; // Grid version 1
import Item from '@mui/material/ListItem';


function Services(){
    return(
        <div>
            <section className="top">
            <img className = "office" src={Office} alt = "Office backgroud" />
            <div className="servicesTitle">
                <h1>Services Page</h1>
            </div>
            </section>
            <section className="servicesSection">
                <Grid container direction="row" justifyContent='center' alignItems='center'>
                    <Grid item md className="supportGridItems">
                        <Item className="supportGridItems">Help Desk: helptechsun@gmail.com </Item>
                    </Grid>
                    <Grid item md className="supportGridItems">
                        <Item className="supportGridItems">Comments / Concerns: concerns&commments@gmail.com</Item>
                    </Grid>
                    <Grid item md className="supportGridItems">
                        <Item className="supportGridItems">Tips: fixthistechsun@gmail.com</Item>
                    </Grid> 
                </Grid>
            </section>
        </div>
        
    );
}


export default Services;
