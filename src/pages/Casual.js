import React from "react";
import Carousel from 'react-material-ui-carousel'
import casualData from '../jsons/casual.json'
import '../App.css';

function Casual(){
    let hats = casualData.Hats


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
                hats.map((hat, i) => <Item key={i} item={hat} /> )
            }
            </Carousel>
            
        </div>
    );
}

function Item(props)
{
    console.log(props.item)
    return (
        <div>
            <img src={props.item}/>
            
        </div>
    )
}

export default Casual;
