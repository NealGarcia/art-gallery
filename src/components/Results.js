import { Link } from "react-router-dom";
import React from "react";

function Results({ data }) {
  if (!data.length) {
    return <h2 className="noResults"> No Results Found</h2>;
  }

  return (
    <div>
      <div className="imageContainer">
        {console.log(data)}
        {data.map((data) => (
          <Link
            to={`/details/${data.id}`}
            className="image"
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
