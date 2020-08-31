import React from "react";
import Nav from "./Nav";
import Body from "./Body";
import Icons from "./Icons";
import Comments from "./Comments";
import "./style.css";

class Card extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="feed">
            <div className="post" style={{ marginTop: "10px" }}>

            <h1 className="card-header">For-Loop JavaScript</h1>
              <Nav />
              <Body />
              <Icons />
              <Comments />
              
            </div>
          </div>
        </div>

        {/* <div className="col s6">
          <div className="feed">
            <div className="post" style={{ marginTop: "10px" }}>
              <Nav />

              <Body />

              <Icons />

              <Comments />
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}

export default Card;
