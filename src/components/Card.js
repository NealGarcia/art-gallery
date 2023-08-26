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
            {console.log(item)}
            <div
                className="card"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                
                <img
                    src={`https://www.artic.edu/iiif/2/${item.data.image_id}/full/843,/0/default.jpg`}
                    alt={item.title}
                    className={isHovered ? 
                        "hovered"
                    : null}
                ></img>
                    {
                        isHovered ? 
                        <div className="overlay-text">
                            <h4 className="card-title">{item.data.title}</h4>
                            <p className="card-artist">{item.data.artist_title}</p>
                        </div>
                        : null
                    }
            </div>
        </>
    )
}
export default Card;