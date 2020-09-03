import React from "react";
import Body from "../Card/Body";



export default class TopPicture extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    render() {
      return (
        <div className="topPicture">       
          <div className="text">
            <Body />
          </div>
        </div>
      );
    }
  }