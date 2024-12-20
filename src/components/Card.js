import React from "react";
import loco from "../images/location.png";


export default function Card(props){
    return(
        <article className="Card">
            <div className="main-img">
            <img src={props.img} alt="Mount Fuji" className="Card--img"/>
            </div>
            <img src={loco} alt="location" className="Card--loco"/>
            <span className="Card--label">{props.country}</span>
            <a 
               href={props.map}
               target="blank"
               rel="noopener noreferrer" 
               className="Card--maplink"
            > View on Google Maps
            </a>
            <div className="Content">
            <h1 className="title" >{props.title}</h1>
            <h3 className="date">{props.date}</h3>
            <p className="description" >{props.description}</p>
            </div>
        </article>
    )
}