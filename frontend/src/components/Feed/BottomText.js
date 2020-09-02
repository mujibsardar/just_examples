
import React from "react";

export default class BottomText extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    render() {
      return (
        <div className="bottomText">
          <h4>Learning React? Start Small.</h4>
          <p>
            Can't pry yourself away from the tutorials? The cure is to make tiny
            little experiment apps.
          </p>         
        </div>
      );
    }
  }