import React from "react";
import global from "../images/global.png";

export default function Navbar(){
    return(
        <nav>
            <img src={global} alt="Global" className="--logo"/>
            <h1 className="nav--text">my travel journal</h1>
        </nav>
    )
}