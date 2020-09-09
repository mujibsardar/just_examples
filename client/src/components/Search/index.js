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
    
      <div className="row">
        <div className="col s12">        
           

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
    
  );
}

export default Search;
