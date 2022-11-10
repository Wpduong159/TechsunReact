import React from "react";
import Carousel from 'react-material-ui-carousel'
import casualData from '../jsons/casual.json'
import '../App.css';

function Casual(){
    return(
        <div className="casualBody">
            <h1>Casual Page</h1>

            <Carousel
                className="casualCarousel"
                indicators={false}
                cycleNavigation="true"
                autoPlay={false}
                animation="slide"
                >
            {
                casualData.Hats.map((item, i) => <Item key={i} item={item} /> )
            }
            </Carousel>
            <Carousel
                className="casualCarousel"
                indicators={false}
                cycleNavigation="true"
                autoPlay={false}
                animation="slide"
                >
            {
                casualData.Outerwear.map((item, i) => <Item key={i} item={item} /> )
            }
            </Carousel>
            <Carousel
                className="casualCarousel"
                indicators={false}
                cycleNavigation="true"
                autoPlay={false}
                animation="slide"
                >
            {
                casualData.Shirts.map((item, i) => <Item key={i} item={item} /> )
            }
            </Carousel>
            <Carousel
                className="casualCarousel"
                indicators={false}
                cycleNavigation="true"
                autoPlay={false}
                animation="slide"
                >
            {
                casualData.Pants.map((item, i) => <Item key={i} item={item} /> )
            }
            </Carousel>
            <Carousel
                className="casualCarousel"
                indicators={false}
                cycleNavigation="true"
                autoPlay={false}
                animation="slide"
                >
            {
                casualData.Shoes.map((item, i) => <Item key={i} item={item} /> )
            }
            </Carousel>
        </div>
    );
}

function Item(props)
{
    return (
        <div>
            <img className="casualClothes" src={Object.values(props.item)} loading="eager" title={Object.keys(props.item)} alt={Object.keys(props.item)}/>
        </div>
    )
}

export default Casual;
