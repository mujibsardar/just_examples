import React, { Component } from "react";
import "./style.css";

export default class Author extends Component {
  constructor() {
    super();

    let today = new Date(),
      date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

    this.state = {
      currentDate: date,
    };
  }

  render() {
    return (
      <div className="article-author-grid article">
        <div className="author-img">
          <a href="#">
            <img
              src="https://www.vut.ac.za/wp-content/uploads/2016/02/blank-profile-picture-973460_1280-283x189.png"
              className="avatar"
            />
          </a>
        </div>

        <div>
          <div className="pref">Author</div>
          <div className="article-arrow-grid" className="href">
            <div>
              <a href="#" className="href under-pref">
                Joe Schmo
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="pref">Posted</div>
          <div className="article-arrow-grid" className="href">
            <div>
              <a href="#" className="href under-pref">
                {this.state.currentDate}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
