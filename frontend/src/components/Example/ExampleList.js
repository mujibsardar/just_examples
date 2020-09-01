import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../store/actions/authActions";
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
