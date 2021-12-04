import SearchBar from './components/SearchBar'
import Results from './components/Results'
import { Route, Link } from "react-router-dom";
import Details from './components/Details';
import React, { useState, useEffect } from 'react';

function App() {

  const [data, setData] = useState([])
  const [search, setSearch] = useState("modern")

  function getImages(result){
    const url = `https://api.artic.edu/api/v1/artworks/search?q=${search}&fields=id,title,image_id&limit=30`
    console.log(url)
    fetch(url)
    .then(response => response.json())
    .then(response => { 
        setData(response.data)
        console.log(response)
    })
    .catch(console.err)
  }

  useEffect(() => {
    getImages();
  }, []);

  function handleChange(event) {
    setSearch(event.target.value);
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    getImages(search);
  }

  return (
    <div className="App">
      <SearchBar
        handleChange = {handleChange}
        handleSubmit = {handleSubmit}
        search = {search}
      />
      {/* <Results data = {data}/> */}
      <Route
        path="/" 
        exact component={() => <Results data = {data}/>} 
      />

      <Route 
        path ="/details/:search"
        component = {Details} 
        data = {data}/>
    </div>
  );
}

export default App;
