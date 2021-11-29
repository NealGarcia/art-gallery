import React from 'react';

function SearchBar(props) {
    return (
        <div className = "sideBar">
            <h1>React Art Gallery</h1>
            <form className = "searchForm">
                <input placeholder = "Search"
                       type = "text"
                       required />
                <select name = "options" id = "options">
                    <option value = "name">Name</option>
                    <option value = "artist">Artist</option>
                    <option value = "year">Year</option>
                    <option value = "country">Country of Origin</option>
                </select>
                <button type = "submit">Search</button>




            </form>
        </div>
    );
}

export default SearchBar;