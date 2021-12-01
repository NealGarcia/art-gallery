import React, { useState, useEffect} from 'react';

function Results() {
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
            Results
        </div>
    );
}

export default Results;