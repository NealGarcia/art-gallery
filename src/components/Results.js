import React, { useState, useEffect} from 'react';
import { isDOMComponent } from 'react-dom/test-utils';
import { Link } from 'react-router-dom'

function Results({ data }) {

    return (
        <div>
            <div className = "imageContainer">
                {data.map(data => (
                    <Link to = {`/description/${data.id}`} key = {data.id} className = "image" >
                        <img 
                        src = {`https://www.artic.edu/iiif/2/${data.image_id}/full/843,/0/default.jpg`} 
                        alt = {data.title}>
                        </img>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Results;