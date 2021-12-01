import React, {useState} from 'react';

function SearchBar(props) {
    const [search, setSearch] = useState('')

    function handleChange(event){
        setSearch(event.target.value)
    }

    function handleSubmit(event){
        event.preventDefault();
    }

    return (
        <div className = "sideBar">
            <div id = "titleWrap"><h1 id = "title">React Art Gallery</h1></div>
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
                <button type = "submit">Search</button>




            </form>
        </div>
    );
}

export default SearchBar;