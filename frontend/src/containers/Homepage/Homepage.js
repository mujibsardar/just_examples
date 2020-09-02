import React, { Component } from "react";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import Footer from "../../components/Footer/Footer";
import Main from "../../components/Feed/Main";

class Landing extends Component {
  render() {
    return (
      <>
      
      <div className="container main">
      <div class="row">
        <div class="col s12 center">
          <h4>
            <strong>Welcome</strong> to{" "}
            <span style={{ fontFamily: "monospace" }}>JUST EXAMPLES</span>
          </h4>
        </div>

        <div class="col s12 center">
          <h5 className="light grey-text text-lighten-1">
          search the best available coding examples on the internet
          </h5>
        </div>

        <div class="col s12 center">
          <Search />
        </div> 
      </div>  

      <div className="row">
      <Main />
      </div>       
      </div>
      

      <Footer />
      </>
    );
  }
}
export default Landing;
