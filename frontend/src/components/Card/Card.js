import React from "react";
import Body from "./Body";
import Ratings from "./Ratings";
import Modal from "./Modal";
import Nav from "./Nav";
import "./style.css";

class Card extends React.Component {
  render() {
    return (
      <div className="row">
        <div class="col s12">
          <h2 class="header">For-Loop JavaScript</h2>
          <div class="card horizontal">
            <div id="codeSnippet">
              <Body />
            </div>

            <div class="card-stacked">
              <div class="card-content">
                <Nav />
                <p>
                  {" "}
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                </p>
                <Ratings />
              </div>
              <div class="card-action">
                <Modal />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;