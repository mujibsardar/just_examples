
import React from "react";
import TopPicture from "./TopPicture";
import BottomText from "./BottomText";
import Features from "./Features";
import "./style.css";
import Footer from "../Footer/Footer";
import Nav from "../Card/Nav";

export default class SocialCard extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    render() {
      return (
        <div>
        
          <div className="wrapper">
            <Nav />
            <TopPicture />
            <BottomText />
            <Features />
          </div>
          <div className="wrapper">
            <TopPicture />
            <BottomText />
            <Features />
          </div>

          <Footer />
        </div>
      );
    }
  }