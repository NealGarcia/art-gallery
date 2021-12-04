import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react';

function Results({ data }) {
    return (
        <div>
            <div className = "imageContainer">
                {console.log(data)}
                {data.map(data => (
                    <Link to = {`/description/${data.id}`} className = "image" >
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