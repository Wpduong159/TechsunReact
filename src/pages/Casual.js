import React from "react";
import Carousel from 'react-material-ui-carousel'
import casualData from '../jsons/casual.json'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import '../App.css';

function Casual(){
    return(
        <div className="casualBody">
            <h1>Let's style your casual look:</h1>

            <Carousel
                className="casualCarousel"
                indicators={false}
                cycleNavigation="true"
                autoPlay={false}
                animation="slide"
                navButtonsAlwaysVisible={true}
                fullHeightHover={false}
                navButtonsProps={{
                    style: {
                        backgroundColor: 'transparent',
                        color: 'black',
                        borderRadius: 0
                    }
                }} 
                PrevIcon={<ArrowBackIosIcon/>}
                NextIcon={<ArrowForwardIosIcon/>}
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
                navButtonsAlwaysVisible={true}
                fullHeightHover={false}
                navButtonsProps={{
                    style: {
                        backgroundColor: 'transparent',
                        color: 'black',
                        borderRadius: 0
                    }
                }} 
                PrevIcon={<ArrowBackIosIcon/>}
                NextIcon={<ArrowForwardIosIcon/>}
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
                navButtonsAlwaysVisible={true}
                fullHeightHover={false}
                navButtonsProps={{
                    style: {
                        backgroundColor: 'transparent',
                        color: 'black',
                        borderRadius: 0
                    }
                }} 
                PrevIcon={<ArrowBackIosIcon/>}
                NextIcon={<ArrowForwardIosIcon/>}
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
                navButtonsAlwaysVisible={true}
                fullHeightHover={false}
                navButtonsProps={{
                    style: {
                        backgroundColor: 'transparent',
                        color: 'black',
                        borderRadius: 0
                    }
                }} 
                PrevIcon={<ArrowBackIosIcon/>}
                NextIcon={<ArrowForwardIosIcon/>}
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
                navButtonsAlwaysVisible={true}
                fullHeightHover={false}
                navButtonsProps={{
                    style: {
                        backgroundColor: 'transparent',
                        color: 'black',
                        borderRadius: 0
                    }
                }} 
                PrevIcon={<ArrowBackIosIcon/>}
                NextIcon={<ArrowForwardIosIcon/>}
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
