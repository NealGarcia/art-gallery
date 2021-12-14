import SearchBar from "./components/SearchBar";
import Results from "./components/Results";
import { Route, useHistory } from "react-router-dom";
import Details from "./components/Details";
import Home from "./components/Home";
import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("modern");
  const history = useHistory();

  function getResults(result) {
    const url = `https://api.artic.edu/api/v1/artworks/search?q=${search}&fields=id,title,image_id&limit=30`;
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
    history.push("/results");
    getResults(search);
  }

  return (
    <div className="App">
      <SearchBar
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        search={search}
      />
      {/* <Results data = {data}/> */}
      <Route path="/" exact component={Home} />
      <Route path="/results" exact component={() => <Results data={data} />} />
      <Route path="/details/:search" component={Details} data={data} />
    </div>
  );
}

export default App;
