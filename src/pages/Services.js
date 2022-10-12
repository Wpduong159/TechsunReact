import React from "react";
import '../App.css';
import { Office } from "../images/imageIndex";

function Services(){
    return(
        <div>
            <img className = "office" src={Office} alt = "Office backgroud" />
            <div className="servicesTitle">
                 <h1>Services Page</h1>
            </div>
        </div>
    );
}

export default Services;
