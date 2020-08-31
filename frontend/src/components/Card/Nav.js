import React from "react";


export default class Nav extends React.Component {
    render() {
      return (
        <div className="post__top">
        <div className="post__top-left">
          <img
            className="post__profile-img"
            src="https://www.vut.ac.za/wp-content/uploads/2016/02/blank-profile-picture-973460_1280-283x189.png"
            alt=""
          />
          <a className="post__profile-name" href="#">
            Camden Foucht
          </a>
        </div>
        <div>
          <span className="post__date-posted">1m</span>
        </div>
      </div>
      );
    }
  }
  
