import React from "react";
import Carousel from 'react-material-ui-carousel'
import casualData from '../jsons/casual.json'
import '../App.css';

function Casual(){
    let hats = casualData.Hats
    let outerwears = casualData.Outerwear


    return(
        <div className="casualBody">
            <h1>Casual Page</h1>

            <Carousel
                indicators="false"
                navButtonsAlwaysVisible="true"
                cycleNavigation="true"
                autoPlay="true"
                animation="slide"
                >
            {
                hats.map((item, i) => <Item key={i} item={item} /> )
            }
            </Carousel>
            <Carousel
                indicators="false"
                navButtonsAlwaysVisible="true"
                cycleNavigation="true"
                autoPlay="true"
                animation="slide"
                >
            {
                outerwears.map((item, i) => <Item key={i} item={item} /> )
            }
            </Carousel>
            
        </div>
    );
}

function Item(props)
{
    return (
        <div>
            <img className="clothes" src={Object.values(props.item)}/>
        </div>
    )
}

export default Casual;
