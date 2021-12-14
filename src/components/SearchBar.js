import { Link } from "react-router-dom";

function SearchBar({ handleSubmit, handleChange }) {
  return (
    <div className="sideBar">
      <Link to={"/results"} id="titleWrap">
        <h1 id="title">
          React Art <br />
          Gallery
        </h1>
      </Link>
      <form className="searchForm" onSubmit={handleSubmit}>
        <input
          placeholder="Keyword ex: Picasso, Modern"
          type="text"
          onChange={handleChange}
          required
        />
        <br />

        <button type="submit">SEARCH</button>
        <br />
        <p className="source">
          Data and images are sourced from the Art Institute of Chicago API.
        </p>

        <p className = "author">&copy; Neal Garcia, 2021 </p>
      </form>
    </div>
  );
}

export default SearchBar;
