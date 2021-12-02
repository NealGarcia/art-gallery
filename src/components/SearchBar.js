import React, {useState} from 'react';
import { Link } from 'react-router-dom'

function SearchBar({ handleSubmit, handleChange, search }) {
    return (
        <div className = "sideBar">
            <Link to = {"/"} id = "titleWrap"><h1 id = "title">React Art <br/>Gallery</h1></Link>
            <form className = "searchForm" onSubmit = {handleSubmit}>
                <input placeholder = "Search"
                       type = "text"
                       onChange = {handleChange}
                       required />
                <select name = "options" id = "options">
                    <option value = "name">Name</option>
                    <option value = "artist">Artist</option>
                    <option value = "year">Year</option>
                    <option value = "country">Country of Origin</option>
                </select>
                <br/>
                <button type = "submit">Search</button>
                <br/>
                <button type = "button"> Random Artwork </button>

            </form>
        </div>
    );
}

export default SearchBar;