import React from "react";
import '../App.css';
import city from '../images/chicago-night.gif';


function Home(){
    return(
        <div>
            <img className="cityBackground" src={city} alt="City background" />
        </div>
    );
}

export default Home;