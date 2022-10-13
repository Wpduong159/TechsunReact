import React from "react";
import '../App.css';
import { Office, Tanjiro, Whatif } from "../images/imageIndex";

function Services(){
    return(
        <div>
            <img className = "office" src={Office} alt = "Office backgroud" />
            <div className="servicesTitle">
                <h1>Services Page</h1>
                <div className="sideBySide">
                    <div class='row'>
                        <div class='column'>
                            <img src={Whatif} alt = "The matrix scene"/>
                        </div>
                        <div class = 'column'>
                            <img src={Tanjiro} alt = "Demon Slayer anime"/>
                        </div>
                    </div>
                </div>    
            </div>
        </div>
    );
}

export default Services;
