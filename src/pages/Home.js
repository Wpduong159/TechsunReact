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
        <Link to='/professional'>
            <div className="promptColumn">
                <img className="imgSample" src={ProfSample} alt="Professional Sample" />
                <div className="promptLayer">
                    <div className="promptText">
                        <h3>Business Professional</h3>
                    </div>
                </div>
            </div>
        </Link>
    );
}

function Cas() {
    return (
        <Link to='/casual'>
            <div className="promptColumn">
                <img className="imgSample" src={CasSample} alt="Casual Sample" />
                <div className="promptLayer">
                    <div className="promptText">
                        <h3>Business Professional</h3>
                    </div>
                </div>
            </div>
        </Link>
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