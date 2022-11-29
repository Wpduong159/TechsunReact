import React from "react";
import '../App.css';
import Carousel from "react-material-ui-carousel";
import professionalData from '../jsons/professional.json'
import Grid from '@mui/material/Grid';


function Professional(){
    return(
        <div className="professionalBody">
            <h1>Professional Page</h1>
            {/* <Grid container spacing={1}>
                <Grid item xs={6} md={6}> */}
                    <Carousel
                        className="professionalCarousel"
                        indicators={false}
                        cycleNavigation="true"
                        autoPlay={false}
                        animation="slide"
                    >
                    {
                        professionalData.Outerwear.map((item, i)=> <Item key={i} item ={item}/>)
                    }
                    </Carousel>
                {/* </Grid>
                <Grid item xs={6} md={6}>
                    <Item>xs=6 md=4</Item>
                </Grid>
                <Grid item xs={6} md={6}>
                    <Item>xs=6 md=4</Item>
                </Grid>
                <Grid item xs={6} md={6}>
                    <Item>xs=6 md=8</Item>
                </Grid>
            </Grid> */}
        </div>
    );
}


function Item(props)
{
    return (
        <div>
            <img className="profssionalClothes" src={Object.values(props.item)} loading="eager" title={Object.keys(props.item)} alt={Object.keys(props.item)}/>
        </div>
    )
}


export default Professional;
