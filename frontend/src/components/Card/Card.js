import React from "react";

class Card extends React.Component {
  render() {
    return (
        <div className="feed">
        <div className="post" style={{marginTop: '10px'}} >
          <div className="post__top">
            <div className="post__top-left">
              <img className="post__profile-img" src="https://www.vut.ac.za/wp-content/uploads/2016/02/blank-profile-picture-973460_1280-283x189.png" alt="" />
              <a className="post__profile-name" href="#">Camden Foucht</a>
            </div>
            <div>
              <span className="post__date-posted">1m</span>
            </div>
          </div>
          <div className="post__content">
            <p className="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi perspiciatis praesentium omnis, nisi quae tempora. Provident natus sint, est labore ratione quam repellat laborum itaque voluptatem magnam perspiciatis aperiam unde.</p>
          </div>
          <div className="post__footer">
            <a href="#" className="footer-link">
                <i className="footer-icon fas fa-comments"></i>
                12K
              </a>
            <a href="#" className="footer-link">
                <i className="footer-icon fas fa-paw"></i>
                39K
              </a>
            <a href="#" className="footer-link">
              <i className="footer-icon fas fa-share-square"></i>
                2K
              </a>
          </div>
          <div className="post__comments">
            <div className="comment">
                          <img className="comment__profile-img" src="https://www.vut.ac.za/wp-content/uploads/2016/02/blank-profile-picture-973460_1280-283x189.png" alt="" />
              <div className="comment__content">
                <a href="#" className="comment-name">Peyton Couch</a>
              <p className="comment__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi sapiente possimus beatae laboriosam aperiam facere id, architecto nobis ut aspernatur!</p>
              </div>
            </div>
            <div className="comment-create">
                    <img className="comment__profile-img" src="https://www.vut.ac.za/wp-content/uploads/2016/02/blank-profile-picture-973460_1280-283x189.png" alt="" />
              <input className="input" placeholder="Add a comment" />
            </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Card;