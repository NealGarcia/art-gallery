import React, { useState, useEffect } from "react";

function Card(item){
    const [isHovered, setIsHovered] = useState(false);
    
    const handleMouseEnter = () => {
        setIsHovered(true);
    }
    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    return(
        <>
            {console.log(item.data)}
            <div
                className="card"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div
                    className="card-overlay-wrapper"
                >
                    {isHovered ? 
                        <div className="card-inner">
                            <h4 className="card-title">{item.data.title}</h4>
                        </div>
                       
                    : null}
                </div>
                <img
                    src={`https://www.artic.edu/iiif/2/${item.data.image_id}/full/843,/0/default.jpg`}
                    alt={item.title}
                    className={isHovered ? 
                        "hovered"
                    : null}
                ></img>
            </div>
        </>
    )
}
export default Card;