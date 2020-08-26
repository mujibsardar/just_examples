import React, { Component } from "react";
import { Link } from "react-router-dom";

class exampleView extends Component {
  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4> Examples
              <span style={{ fontFamily: "monospace" }}> Javascript </span>  Code
            </h4>
            <p className="flow-text grey-text text-darken-1">
              This is an example code snippet.
            </p>
            <br/>
            <div className="code-section">
               <pre>
                 <code>
                 <p> CODE HERE </p>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default exampleView;
