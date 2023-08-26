import SideBar from "./components/SideBar";
import Results from "./components/Results";
import { Route, useHistory } from "react-router-dom";
import Details from "./components/Details";
import Home from "./components/Home";
import React, { useState, useEffect } from "react";

function App() {
  // Search terms that are randomized through
  const searchTerms = [
    "Modern",
    "Picasso",
    "Contemporary",
    "Oil Painting",
    "Sculpture",
    "Impressionism",
    "Abstract",
    "Palette",
    "Canvas",
    "Watercolor",
    "Expressionism",
    "Palette Knife",
    "Cubism",
    "Easel",
    "Fresco",
    "Pop Art",
    "Graffiti",
    "Dadaism",
    "Surrealism",
    "Engraving",
    "Ink",
    "Chiaroscuro",
    "Monet",
    "Portraiture",
    "Gouache",
    "Calligraphy",
    "Art Nouveau",
    "Fauvism",
    "Pointillism",
    "Collage",
    "Renaissance",
    "Realism",
    "Still Life",
    "Bronze",
    "Marble",
    "Landscape",
    "Carving",
    "Mosaic",
    "Mural",
    "Van Gogh",
    "Abstract Expressionism",
    "Printmaking",
    "Pastel",
    "Sgraffito",
    "Installation",
    "Glaze",
    "Hue",
    "Mondrian",
    "Ceramics",
    "Varnish",
  ];
  const randomIndex = Math.floor(Math.random() * searchTerms.length);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState(searchTerms[randomIndex]);
  const history = useHistory();

  function getResults(result) {
    const url = `https://api.artic.edu/api/v1/artworks/search?q=${search}&fields=id,title,image_id,artist_title&limit=30`;
    console.log(url)
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setData(response.data);
      })
      .catch(console.err);
  }

  useEffect(() => {
    getResults();
  }, []);

  function handleChange(event) {
    setSearch(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    history.push("/gallery");
    getResults(search);
  }

  function randomize(){
    console.log("Randomize!")
    const index = Math.floor(Math.random() * searchTerms.length);
    var randomTerm = searchTerms[index];
    setSearch(randomTerm)
    getResults(search);
  }

  return (
    <div className="App">
      <SideBar
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        search={search}
        randomize={randomize}
      />
      {/* <Results data = {data}/> */}
      <Route path="/" exact component={Home}/>
      <Route path="/gallery" exact component={() => <Results data={data} />} />
      <Route path="/details/:search" component={Details} data={data} />
    </div>
  );
}

export default App;
