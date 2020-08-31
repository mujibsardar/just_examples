import React, { Component } from "react";
import Footer from "../../components/Footer/Footer"

class Landing extends Component {
  render() {
    return (
      <>
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Welcome</b> to {" "}
              <span style={{ fontFamily: "monospace" }}>JUST EXAMPLES</span>
            </h4>
            <p className="flow-text grey-text text-darken-1">

            </p>
            <br />            

          </div>
        </div>
        
      </div>
      <Footer />
      </>
    );
  }
}
export default Landing;
