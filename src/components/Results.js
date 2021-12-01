import React, { useState, useEffect} from 'react';
import { isDOMComponent } from 'react-dom/test-utils';

function Results({images}) {
    const [result, setResult] = useState([]);

    useEffect(() => {
        fetch('https://api.artic.edu/api/v1/artworks')
        .then(res => res.json())
        .then(json => { 
            setResult(json)
            console.log(json)
        })
        .catch(console.err)
    },[])

    return (
        <div>
            <div className = "imageContainer">
                {images.map(image => (
                    <div key = {image.id} className = "image">
                        <img src = {image.url} alt = "artwork"/>
                    </div>
                ))}


            </div>
        </div>
    );
}

export default Results;