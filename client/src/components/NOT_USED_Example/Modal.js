import "regenerator-runtime/runtime";
import React, { Component } from "react";
import Atenas from "react-atenas-components";
// import Body from "./Body";
import Comments from "./Comments";
import Nav from "./Nav";

class Modal extends Component {

  state = {
    open: false,
  };

  onToggle = async () => {
    await this.setState({ open: !this.state.open });
  };



  render() {
    return (
      <div className="modal-wrapper">
      <a className="waves-effect waves-light btn-small" onClick={this.onToggle}>Comments</a>
        {/* <Atenas.Button onClick={this.onToggle} style={{color: "#26a69a"}}>Comments</Atenas.Button> */}
        <Atenas.Modal open={this.state.open} onClose={this.onToggle}>
          <div>
            <h3>For-Loop JavaScript</h3>
            <Nav />
            
            {/* <Body /> */}
                      
            <Comments />
          </div>
        </Atenas.Modal>
      </div>
    );
  }
}

export default Modal;
