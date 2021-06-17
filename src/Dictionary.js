import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  function searchWord(event) {
    event.preventDefault();
    alert(`Searching for "${keyword}"`);
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
          className="btn btn-primary col-sm-1"
        ></input>
      </form>
    </div>
  );
}
