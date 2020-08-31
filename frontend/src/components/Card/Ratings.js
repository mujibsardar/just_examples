import React from "react";
import Chips from "../Chips/Chips";

export default class Ratings extends React.Component {
  render() {
    return (
      <div className="post-footer">
        {/* <a href="#" className="footer-link">
          <i className="footer-icon fas fa-comments"></i>
          12K
        </a> */}
        <a href="#" className="footer-link">
          <i className="footer-icon fas fa-arrow-up"></i>
          39K
        </a>
        <a href="#" className="footer-link">
          <i className="footer-icon fas fa-arrow-down"></i>
          2K
        </a>
        <a href="#" className="footer-link">
          <Chips />
        </a>
      </div>
    );
  }
}
