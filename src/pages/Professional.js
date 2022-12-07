import React from "react";
import '../App.css';
import Carousel from "react-material-ui-carousel";
import professionalData from '../jsons/professional.json'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';



function Professional(){
    return(
        <div className="professionalBody">
            <h1>Let's style your professional look:</h1>
            <Carousel
                className="carousel"
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
                professionalData.Outerwear.map((item, i) => <Item key={i} item={item} /> )
            }
            </Carousel>
            <Carousel
                className="carousel"
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
                professionalData.Shirts.map((item, i) => <Item key={i} item={item} /> )
            }
            </Carousel>
            <Carousel
                className="carousel"
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
                professionalData.Pants.map((item, i) => <Item key={i} item={item} /> )
            }
            </Carousel>
            <Carousel
                className="carousel"
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
                professionalData.Shoes.map((item, i) => <Item key={i} item={item} /> )
            }
            </Carousel>
        </div>
    );
}


function Item(props)
{
    return (
        <div>
            <img className="clothes" src={Object.values(props.item)} loading="eager" title={Object.keys(props.item)} alt={Object.keys(props.item)}/>
        </div>
    )
}


export default Professional;
