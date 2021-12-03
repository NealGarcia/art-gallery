import React, {useState, useEffect} from 'react';

function Description(props) {
    const [data, setData] = useState([])
    const url = `https://api.artic.edu/api/v1/artworks/${props.match.params.search}`
    console.log(url)

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(response => { 
            setData(response.data)
        })
        .catch(console.err)
    }, []);

    return (
        <div className = "descriptionContainer">
            {console.log(data)}
            <h1>Description of {data.title}</h1>
        </div>
    );
}

export default Description;