import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";

function Search() {
  return (
    <div className="container-search" style={{
      //top:"50px"
    }}>
      <div className="row">
        <div className="col s12">
          <div className="row">
            <h5 className="header col s12 light grey-text text-lighten-1 center-align">
              search the best available coding examples on the internet
            </h5>
            <div className="input-field col s12">
              <i className="material-icons prefix">search</i>
              <input
                type="text"
                id="autocomplete-input"
                className="autocomplete"
              />
              <label for="autocomplete-input">search examples</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
