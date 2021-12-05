import React, { useState, useEffect } from "react";

function Details(props) {
  const [data, setData] = useState([]);
  const url = `https://api.artic.edu/api/v1/artworks/${props.match.params.search}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setData(response.data);

      })
      .catch(console.err);
  }, []); 
  

  return (
    <div className="detailsContainer">
      {console.log(data)}
      <img
        src={`https://www.artic.edu/iiif/2/${data.image_id}/full/843,/0/default.jpg`}
        alt={data.title}
        className="descriptionImage"
      ></img>
      <div className="descriptionText">
        <h3 className="artworkTitle">{data.title}</h3>
        <h3 className="artistName">{data.artist_display}</h3> 
        <h4 className="artworkDetails">Created in {data.place_of_origin}, {data.date_display}</h4>
        <p className="artworkMedium"><b>Medium:</b> {data.medium_display}</p>
        <p className="artowrkStyle"><b>Style:</b> {data.style_title}</p>
      </div>
    </div>
  );
}

export default Details;
