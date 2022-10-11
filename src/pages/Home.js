import React from "react";
import '../App.css';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import { City, ProfSample, CasSample } from '../images/imageIndex';

const autoResize = {
    root: {
        flexGrow: 1
    }
};

function Prof() {
    return (
        <div className="promptColumn">
            <Link to='/professional'>
                <img className="imgSample" src={ProfSample} alt="Professional Sample" />
                <div className="promptLayer">
                    <div className="promptText">
                        <h3>Business Professional</h3>
                    </div>
                </div>
            </Link>
        </div>
    );
}

function Cas() {
    return (
        <div className="promptColumn">
            <Link to='/casual'>
                <img className="imgSample" src={CasSample} alt="Casual Sample" />
                <div className="promptLayer">
                    <div className="promptText">
                        <h3>Business Professional</h3>
                    </div>
                </div>
            </Link>
        </div>
    );
}

function Home(){
    return(
        <div>
            <section className="initial">
                <img className="cityBackground" src={City} alt="City background" />
                <div className="welcome">
                    <h1>Welcome. Let's pick today's look.</h1>
                </div>
            </section>
            <section className="chooseStyle" style={autoResize.root}>
                <h1 className="prompt">Please choose a style:</h1>
                <Grid container spacing={2}>
                    <Grid item xs>
                        <Prof />
                    </Grid>
                    <Grid item xs>
                        <Cas />
                    </Grid>
                </Grid>
            </section>

        </div>
    );
}

export default Home;