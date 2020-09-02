import React, { Component } from "react";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import Footer from "../../components/Footer/Footer"
import ExampleCard from "../../components/Feed/ExampleCard"; 

class Landing extends Component {
  render() {
    return (
      <>
      {/* <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Welcome</b> to {" "}
              <span style={{ fontFamily: "monospace" }}>JUST EXAMPLES</span>
            </h4>
            <p className="flow-text grey-text text-darken-1">
            </p>
            <div style={{
              position: "relative",
              padding:"10vh"
            }}>
              <Search/>
            </div>
          </div>
        </div>
      </div> */}

      <ExampleCard />
       
      </>
    );
  }
}
export default Landing;
