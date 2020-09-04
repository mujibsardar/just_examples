import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { logoutUser } from "../../store/actions/authActions";
import { connect } from "react-redux";

class Navbar extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const { user } = this.props.auth;
    const isAuthenticated = this.props.auth.isAuthenticated
    return (
      <nav>
        <div className="nav-wrapper">
          {/* <a href="/" style={{ fontFamily: "monospace" }}
          className="brand-logo left black-text active">
          <i className="material-icons">code</i>Just Examples</a>          */}

          {/*conditional render*/}
          {!isAuthenticated ?
          <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="/register" style={{
              width: "110px",
              borderRadius: "1px",
              letterSpacing: "1.5px"
            }}
            className="waves-effect waves-light btn-small blue accent-3">Register</a></li>

            <li><a href="/login" style={{
              width: "90px",
              borderRadius: "1px",
              letterSpacing: "1px"
            }}
            className="waves-effect waves-light btn-small blue accent-3">Login</a></li>
          </ul>

          :

        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="/add/example"className="waves-effect waves-light btn-small blue accent-4">Add Example</a></li>
          <li><a href="/dashboard"className="btn-flat">{user.name.split(" ")[0]}</a></li>
          <li><a href="#" style={{
            width: "90px",
            borderRadius: "1px",
            letterSpacing: "1px"
          }}
          className="btn-flat"
          onClick={this.onLogoutClick}
          >Logout</a></li>
        </ul>
        } {/*end conditional render*/}
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar);
