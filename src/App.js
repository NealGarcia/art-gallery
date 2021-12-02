import SearchBar from './components/SearchBar'
import Results from './components/Results'
import { Route, Link } from "react-router-dom";
import Description from './components/Description';
import React, { useState, useEffect } from 'react';

function App() {

  // const images = [
  //   {
  //     id: 1,
  //     url: 'https://www.artic.edu/iiif/2/3cdb709b-4e22-fa5c-ce27-6bb1ddd33122/full/843,/0/default.jpg'
  //   },
  //   {
  //     id: 2,
  //     url: 'https://www.artic.edu/iiif/2/7ff30653-b964-2b88-a947-a64ca14be0cd/full/843,/0/default.jpg'
  //   },
  //   {
  //     id: 3,
  //     url:
  //       'https://www.artic.edu/iiif/2/9c23774d-cbe5-4727-b068-1b373a6ce9d5/full/843,/0/default.jpg'
  //   },
  //   {
  //     id: 4,
  //     url: 'https://www.artic.edu/iiif/2/ec34f8dc-3f2a-13ab-bbdf-63791047740d/full/843,/0/default.jpg'
  //   },
  //   {
  //     id: 5,
  //     url: 'https://www.artic.edu/iiif/2/4ee4657a-c0dc-c599-a4a7-ac9923afe10e/full/843,/0/default.jpg'
  //   },
  //   {
  //     id: 6,
  //     url: 'https://www.artic.edu/iiif/2/f1fb200e-c6ca-beb2-1933-beb60f879e68/full/843,/0/default.jpg'
  //   },
  //   {
  //     id: 7,
  //     url: 'https://www.artic.edu/iiif/2/5698f689-5ca4-5207-766b-19931aeef5f9/full/843,/0/default.jpg'
  //   },
  //   {
  //     id: 8,
  //     url: 'https://www.artic.edu/iiif/2/a76e11b8-aea5-fc9c-a8bb-d9e00f5be03d/full/843,/0/default.jpg'
  //   },
  //   {
  //     id: 9,
  //     url: 'https://www.artic.edu/iiif/2/3cdb709b-4e22-fa5c-ce27-6bb1ddd33122/full/843,/0/default.jpg'
  //   },
  //   {
  //     id: 10,
  //     url: 'https://www.artic.edu/iiif/2/7ff30653-b964-2b88-a947-a64ca14be0cd/full/843,/0/default.jpg'
  //   },
  //   {
  //     id: 11,
  //     url:
  //       'https://www.artic.edu/iiif/2/9c23774d-cbe5-4727-b068-1b373a6ce9d5/full/843,/0/default.jpg'
  //   },
  //   {
  //     id: 12,
  //     url: 'https://www.artic.edu/iiif/2/ec34f8dc-3f2a-13ab-bbdf-63791047740d/full/843,/0/default.jpg'
  //   },
  //   {
  //     id: 13,
  //     url: 'https://www.artic.edu/iiif/2/4ee4657a-c0dc-c599-a4a7-ac9923afe10e/full/843,/0/default.jpg'
  //   },
  //   {
  //     id: 14,
  //     url: 'https://www.artic.edu/iiif/2/f1fb200e-c6ca-beb2-1933-beb60f879e68/full/843,/0/default.jpg'
  //   },
  //   {
  //     id: 15,
  //     url: 'https://www.artic.edu/iiif/2/5698f689-5ca4-5207-766b-19931aeef5f9/full/843,/0/default.jpg'
  //   },
  //   {
  //     id: 16,
  //     url: 'https://www.artic.edu/iiif/2/a76e11b8-aea5-fc9c-a8bb-d9e00f5be03d/full/843,/0/default.jpg'
  //   }
  // ];
  const [data, setData] = useState([])
  const [search, setSearch] = useState("cat")

  function getImages(result){
    const url = `https://api.artic.edu/api/v1/artworks/search?q=${search}&fields=id,title,image_id`
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
      <Results data = {data}/>
      <Route path ="/description"
            component = {Description} 
            data = {data}/>
    </div>
  );
}

export default App;
