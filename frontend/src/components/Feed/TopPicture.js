import React from "react";



export default class TopPicture extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    render() {
      return (
        <div className="topPicture">
          <div className="logo">
            <h1>DEV</h1>
          </div>
          <div className="text">
            <h1>Learning React? Start Small.</h1>
          </div>
        </div>
      );
    }
  }