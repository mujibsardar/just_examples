import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { useDispatch } from 'react-redux';
import { searchExamples } from '../../store/actions/examplesActions';

import "../../App.css";

const Search = () => {
  // TODO Best solution?
  const [dispatch, setDispatch] = useState({dispatch: useDispatch()});

  function handleSearch(e) {
    const query = e.target.value;
    dispatch.dispatch(searchExamples(query));
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
