import "regenerator-runtime/runtime";
import React from "react";
import Atenas from "react-atenas-components";
import Body from "./Body";
import Comments from "./Comments";
import Nav from "./Nav";

class Modal extends React.Component {
  state = {
    open: false,
  };
  onToggle = async () => {
    await this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <div className="modal-wrapper">
        <Atenas.Button onClick={this.onToggle}>Comments</Atenas.Button>
        <Atenas.Modal open={this.state.open} onClose={this.onToggle}>
          <div>
            <h3>For-Loop JavaScript</h3>
            <Nav />
            <Body />

            <Comments />
          </div>
        </Atenas.Modal>
      </div>
    );
  }
}

export default Modal;
