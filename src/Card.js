import React, { useState } from "react";
import "./App.css";

function Card({name, image}) {
    const [{angle, xPosition, yPosition}] = useState({
        angle: Math.random() * 90 - 15,
        xPosition: Math.random() * 40 - 10,
        yPosition: Math.random() * 40 - 10,
    });

    const transform = `translate(${xPosition}px, ${yPosition}px) rotate(${angle}deg)`;

    return <img
        className="Card"
        alt={name}
        src={image}
        style={{transform}} />;
}

export default Card;