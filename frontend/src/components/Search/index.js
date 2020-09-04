import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
// SEARCH STEP X)
import { useDispatch } from 'react-redux';

import "../../App.css";

const Search = () => {

  const [dispatch, setDispatch] = useState({dispatch: useDispatch()});
  // SEARCH STEP X)
  function handleSearch(e) {
    const value = e.target.value;
    // TODO Remove later
    console.log(`value: ${value}`);
  }

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
                // SEARCH STEP X) Call on handleInputChange
                onChange={handleSearch}
              />
              <label htmlFor="autocomplete-input">search examples</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
