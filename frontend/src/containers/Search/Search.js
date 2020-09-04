import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "../../App.css";


function Search() {
  return (
    
      <div className="row">
        <div className="col s12">        
           

            <div className="input-field col s12">
              <i className="material-icons prefix">search</i>
              <input
                type="text"
                id="autocomplete-input"
                className="autocomplete"
              />
              <label htmlFor="autocomplete-input">search examples</label>
            </div>

         
        </div>
      </div>
    
  );
}

export default Search;
