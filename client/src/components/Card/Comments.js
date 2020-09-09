import React, { Component } from "react";

export default class Comments extends Component {
  state = {
    open: false,
  };

  onToggle = async () => {
    await this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <div className="post__comments">
        <div className="comment">
          <img
            className="comment__profile-img"
            src="https://www.vut.ac.za/wp-content/uploads/2016/02/blank-profile-picture-973460_1280-283x189.png"
            alt=""
          />
          <div className="comment__content">
            <a href="#" className="comment-name">
              Peyton Couch
            </a>
            <p className="comment__text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
              sapiente possimus beatae laboriosam aperiam facere id, architecto
              nobis ut aspernatur!
            </p>
          </div>
        </div>
        <div className="comment-create">
          <img
            className="comment__profile-img"
            src="https://www.vut.ac.za/wp-content/uploads/2016/02/blank-profile-picture-973460_1280-283x189.png"
            alt=""
          />
          <input className="input" placeholder="Add a comment" />
        </div>
      </div>
    );
  }
}
