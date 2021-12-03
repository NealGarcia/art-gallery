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
            <img 
                src = {`https://www.artic.edu/iiif/2/${data.image_id}/full/843,/0/default.jpg`} 
                alt = {data.title}
                className = "descriptionImage">
            </img>
            <div className = "descriptionText">
                <h3 className = "artistName">{(data.artist_display)}</h3>
                <h3 className = "artworkTitle">{data.title}</h3>
                <h4 className = "artworkMedium">{data.medium_display}</h4>
                <a href = "#">Read More</a>
                <p>Go Back</p>




            </div>
        </div>
    );
}

export default Description;