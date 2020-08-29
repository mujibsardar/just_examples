import React, { Component } from "react";
import Chips from "./Chips";

export default class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      details: [
        {
          id: 0,
          author: "Angela Smith",          
          posted: "22nd September",
          title: "For-loop javascript",
          content:
            "for (i = 0; i < cars.length; i++) { text += cars[i]}",
          heart: 23,
          
        },
        {
          id: 1,
          author: "Jimmy Fletcher",          
          posted: "8th September",
          title: "Do-while loop javascript",
          content:
            "do {} while()",
          heart: 10,
          
        },  
      ],
    };
  }
  heartClick = (id) => {
    let detailsCopy = [...this.state.details];
    detailsCopy[id].heart = detailsCopy[id].heart + 1;
    console.log(detailsCopy[id].heart);
    this.setState({
      details: detailsCopy,
    });
  };
  render() {
    return (
      <React.Fragment>
        <div className="cardwrapper">
          {this.state.details.map((current) => {
            return (
              <div key={current.id} className="card-display">
                <div>
                  <Author
                    author={current.author}                    
                    posted={current.posted}
                  />
                </div>
                <div className="postContainer">
                  <PostTitle posttitle={current.title} />
                  <Post postContent={current.content} />
                </div>
                <IconBox
                  heart={current.heart}
                  heartClick={() => this.heartClick(current.id)}
                />
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

const Author = (props) => (
  <div className="authorContainer">   
    <div className="authorInfo">
      <h6 className="author">{props.author} shared an example.</h6>
      <p className="posted">{props.posted}</p>
    </div>
  </div>
);
const PostTitle = (props) => <h3 className="postTitle">{props.posttitle}</h3>;
const Post = (props) => (
  <div>
    <div></div>
    <div className="post">
      <p className="postContent">{props.postContent}</p>
    </div>
  </div>
);

const IconBox = (props) => (
  <div className="iconBox">
    <span className="fa fa-comments fa-2x"></span>
    <span>2</span>

    <span className="fa fa-thumbs-up fa-2x" onClick={props.heartClick}></span>
    <span>{props.heart} likes</span>
  </div>
);
