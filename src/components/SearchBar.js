import { Link } from 'react-router-dom'

function SearchBar({ handleSubmit, handleChange, search }) {
    return (
        <div className = "sideBar">
            <Link to = {"/"} id = "titleWrap"><h1 id = "title">React Art <br/>Gallery</h1></Link>
            <form className = "searchForm" onSubmit = {handleSubmit}>
                <input placeholder = "Keyword ex: Picasso, Landscape, Watercolor"
                       type = "text"
                       onChange = {handleChange}
                       required />
                <br/>
                <button type = "submit">Search</button>
                <br/>
                <button type = "button"> Random Artwork </button>
                
                
            </form>
        </div>
    );
}

export default SearchBar;