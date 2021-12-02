import React, {useState, useEffect} from 'react';
import Results from './Results';

function Description(props) {

    const [artwork, setArtwork] = useState([]);
    const url = props.match
    useEffect(() => {
      fetch(url )
        .then(res => res.json())
        .then((json => setArtwork(json)))
        .catch(err => {
          console.error(err);
        });
    }, []);

    return (
        <div className = "descriptionContainer">
            <h1>Description page</h1>
            {/* <img src = "url" alt = "artwork">        </img> */}

        </div>
    );
}

export default Description;