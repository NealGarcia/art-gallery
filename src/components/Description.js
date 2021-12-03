import React, {useState, useEffect} from 'react';
import Results from './Results';

function Description(props) {
    const [data, setData] = useState([])

    useEffect(() => {
        // const url = `https://api.artic.edu/api/v1/artworks/search?q=${props.match.search}&fields=id,title,image_id&limit=30`
        const url = `https://api.artic.edu/api/v1/artworks/search?q=$cats&fields=id,title,image_id&limit=30`

        console.log(url)
        fetch(url)
        .then(response => response.json())
        .then(response => { 
            setData(response.data)
            console.log(response)
        })
        .catch(console.err)
    }, []);

    return (
        <div className = "descriptionContainer">
            {console.log(data)}
            {/* <h1>Description of {data.title}</h1> */}

        </div>
    );
}

export default Description;