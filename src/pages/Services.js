import React from "react";
import '../App.css';
import Stack from "@mui/material/Stack";
import Item from "@mui/material/ListItem";
import { Office, Tanjiro, Whatif } from "../images/imageIndex";






function Services(){
    return(
        <div>
            <img className = "office" src={Office} alt = "Office backgroud" />
            <div className="servicesTitle">
                <h1>Services Page</h1>
                <Stack direction='row' spacing={12}>
                    <Item md><img className = "tanjiro" src={Tanjiro} alt = "Demon Slayer Anime" /></Item>
                    <Item md><img className = "whatif" src={Whatif} alt = "Meme" /></Item>
                </Stack>
            </div>
        </div>
    );
}

export default Services;
