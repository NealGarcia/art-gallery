import { Link } from 'react-router-dom'
import React, { useState } from 'react';

function Results({ data }) {
    const [isShown, setIsShown] = useState(false);

    function mouseHover(event) {
        event.target.style.opacity = 0.75;
      }

    function mouseLeave(event) {
        event.target.style.opacity = 1.0;
    }

    return (
        <div>
            <div className = "imageContainer">
                {console.log(data)}
                {data.map(data => (
                    <Link to = {`/details/${data.id}`} className = "image"  onMouseOver={mouseHover} onMouseLeave={mouseLeave}> 
                        <img 
                        src = {`https://www.artic.edu/iiif/2/${data.image_id}/full/843,/0/default.jpg`} 
                        alt = {data.title}
                        className = "resultImage"
                        >
                        </img>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Results;