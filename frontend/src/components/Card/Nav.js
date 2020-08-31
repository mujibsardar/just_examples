import React from "react";


export default class Nav extends React.Component {
    render() {
      return (
        <div className="post-top">
        <div className="post-top-left">
          <img
            className="post-profile-img"
            src="https://www.vut.ac.za/wp-content/uploads/2016/02/blank-profile-picture-973460_1280-283x189.png"
            alt=""
          />
          <a className="post-profile-name" href="#">
            Camden Foucht
          </a>
        </div>
        <div>
          <span className="post-date-posted">1m</span>
        </div>
      </div>
      );
    }
  }
  
