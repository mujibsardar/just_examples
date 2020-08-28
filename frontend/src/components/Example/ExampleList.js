import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import PropTypes from "prop-types";


class ExampleList extends Component {
  render() {
    const { user } = this.props.auth;
    return (
      <div className="row">
      <div class="col s12 center-align">
        <div class="card">
          <div class="card-content">
            <span class="card-title">Title</span>
            <p> Content: <br/> {"for (i = 0; i < var.length; i++) { }"
          }
            </p>
            <p> Tags: Javascript, NodeJS, MongoDB
            </p>
          </div>
          <div class="card-action">
            <a href="#">Posted By {user.name.split(" ")[0]}</a>
          </div>
        </div>
      </div>

    </div>

    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(ExampleList);

//export default ExampleList;

{/*
<div style={{ height: "15vh" }} className="container valign-wrapper">
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
*/}
