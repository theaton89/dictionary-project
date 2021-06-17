import React from "react";
import "./Dictionary.css";

export default function Dictionary() {
  return (
    <div className="Dictionary container">
      <form className="row d-flex justify-content-center">
        <input
          type="search"
          autoFocus={true}
          className="col-sm-3 search-button"
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
