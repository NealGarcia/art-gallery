import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1 className="homeTitle">
        Virtual<br />
        Art-Vault
      </h1>
      <div className="homeContainer">
        <p>Welcome to <span>Virtual Art-Vault</span></p>
        <p>Use the search bar to start finding artworks to view. </p>
        <p>Click on an artwork to learn more.</p>
        <Link
              to={`/gallery`}
              className="image"
        ><div className="btn">Let's see some art!</div></Link>
      </div>
    </div>
  );
}

export default Home;
