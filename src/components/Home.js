import React from "react";

function Home({ handleSubmit, handleChange }) {
  return (
    <div className="home">
      <h1 className="homeTitle">
        React Art <br />
        Gallery
      </h1>
      <div className="homeContainer">
        <p>Welcome to <span>React Art Gallery.</span></p>
        <p>Use the search bar to the left to search for to start finding artworks to view. </p>
        <p>Click on an artwork to learn more.</p>
      </div>
    </div>
  );
}

export default Home;
