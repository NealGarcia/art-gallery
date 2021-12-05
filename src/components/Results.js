import { Link } from "react-router-dom";
import React from "react";


function Results({ data }) {
  function imgMouseHover(event) {
    event.target.style.opacity = 0.75;
  }

  function imgMouseLeave(event) {
    event.target.style.opacity = 1.0;
  }

  if (!data.length ){
    return <h2 className = "noResults"> No Results Found</h2>
}

  return (
    <div>
      <div className="imageContainer">
        {console.log(data)}
        {data.map((data) => (
          <Link
            to={`/details/${data.id}`}
            className="image"
            onMouseOver={imgMouseHover}
            onMouseOut={imgMouseLeave}
            style={{ textDecoration: "none" }}
          >
            <img
              src={`https://www.artic.edu/iiif/2/${data.image_id}/full/843,/0/default.jpg`}
              alt={data.title}
              className="resultImage"
            ></img>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Results;
