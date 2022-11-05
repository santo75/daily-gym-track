import React from "react";

import "./card.css";


const Card = (props) => {
    const {name, day, imgURL} = props;
    return <div className="card">
        <div className="image" style={{backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundImage: `url(${imgURL})`}}>
            <div className="card-text-container">
                <h1 className="name">{name}</h1>
                <h1 style={{fontSize: "24px"}}>DAY: <span className="day">{day}</span></h1>
            </div>
        </div>
    </div>
}

export default Card;