import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { logoutUser } from "../../actions/authActions";
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
        <div className="nav-wrapper grey lighten-3">
          <a href="/" style={{ fontFamily: "monospace" }}
          className="brand-logo left black-text active">
          <i className="material-icons">code</i>Just Example</a>

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
            className="waves-effect waves-light btn-small blue accent-4">Login</a></li>
          </ul>

          :

        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="#" style={{
            width: "90px",
            borderRadius: "1px",
            letterSpacing: "1px"
          }}
          className="waves-effect waves-light btn-small hoverable blue accent-3"
          onClick={this.onLogoutClick}
          >Logout</a></li>
          <li><a className="waves-effect waves-light btn-small deep-orange lighten-2">{user.name.split(" ")[0]}</a></li>
        </ul>
        } {/*end conditional render*/}

        </div>
      </nav>



      /*
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white">
            <Link
              to="/"
              style={{
                fontFamily: "monospace"
              }}
              className="col s5 brand-logo center black-text active"
            >
              <i className="material-icons">code</i>
              JUST EXAMPLES
            </Link>
          </div>
          <div className="col s6">
            <Link
              to="/register"
              style={{
                width: "40px",
                borderRadius: "3px",
                letterSpacing: "1.5px"
              }}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Register
            </Link>
          </div>
          <div className="col s6">
            <Link
              to="/login"
              style={{
                width: "140px",
                borderRadius: "3px",
                letterSpacing: "1.5px"
              }}
              className="btn btn-large btn-flat waves-effect white black-text"
            >
              Log In
            </Link>
          </div>
          <button
            style={{
              width: "150px",
              borderRadius: "3px",
              letterSpacing: "1.5px",
              marginTop: "1rem"
            }}
            //onClick={this.onLogoutClick}
            className="btn btn-large waves-effect waves-light hoverable blue accent-3"
          >
            Logout
          </button>
        </nav>
      </div>
      */
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
