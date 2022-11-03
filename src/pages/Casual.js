import React from "react";
import Carousel from 'react-material-ui-carousel'
import '../App.css';

function Casual(){
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]

    return(
        <div className="casualBody">
            <h1>Casual Page</h1>

            <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
            </Carousel>
            
        </div>
    );
}

function Item(props)
{
    return (
        <div>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <h2 className="CheckButton">
                Check it out!
            </h2>
        </div>
    )
}

export default Casual;
