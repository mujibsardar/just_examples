import React from "react";

const Dropdown = props => {
    return(
      <div className="dropdown ml-auto" onClick={props.toggle}>
        <div className={props.dropdown ? 'show dd-links' : 'hide dd-links'}>
          <a className="dd-link" href="#">Link One</a>
          <a className="dd-link" href="#">Link Two</a>
          <a className="dd-link" href="#">Link Three</a>
          <a className="dd-link" href="#">Link Four</a>
          <a className="dd-link" href="#">Link Five</a>
          <a className="dd-link" href="#">Link Six</a>
          <a className="dd-link border-top" href="#">link Seven</a>
        </div>
      </div>
    );
  };

  export default Dropdown;