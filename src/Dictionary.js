import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function searchWord(event) {
    event.preventDefault();
    // documentation: https://api.dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleWordSearch(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary container">
      <form className="row d-flex justify-content-center" onSubmit={searchWord}>
        <input
          type="search"
          autoFocus={true}
          className="col-sm-3 search-button"
          onChange={handleWordSearch}
        ></input>

        <input
          type="submit"
          value="Search"
          className="btn btn-primary col-sm-2"
        ></input>
      </form>
      <Results results={results} />
    </div>
  );
}
