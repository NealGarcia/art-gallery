import { Link } from "react-router-dom";
import { AiOutlineSearch } from 'react-icons/fa';



function SideBar({ handleSubmit, handleChange }) {
  return (
    <div className="sideBar">
      <Link to={"/results"} id="titleWrap">
        <h1 id="title">
          React Art <br />
          Gallery
        </h1>
      </Link>
      <form className="searchForm" onSubmit={handleSubmit}>
        <div className = "searchContainer">
        <input
          placeholder="Keyword ex: Picasso, Modern"
          type="text"
          onChange={handleChange}
          required
        />
        </div>

        <button className="search" type="submit">SEARCH</button>
        <button className="random">RANDOM</button>
        <button className="saved">SAVED</button>
        <p className="source">
          Data and images are sourced from the Art Institute of Chicago API.
        </p>

        <a href="https://www.nealgarcia.com" target="_blank" className = "author">&copy; Neal Garcia, 2023 </a>
      </form>
    </div>
  );
}

export default SideBar;
