import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../store/actions/authActions";
import Search from "../Search/Search";
import ExampleList from "../../components/Example/ExampleList"
//TODO: MOVE EXAMPLE LIST

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
render() {
    const { user } = this.props.auth;
    return (
          <div style={{ height: "75vh" }} className="container valign-wrapper">
            <div className="row">
              <div className="col s12 center-align">
                <h4>
                  <b>Hey there,</b> {user.name.split(" ")[0]}
                </h4>
                <div style={{
                  position: "relative",
                  padding:"10vh"
                }}>
                  <Search/>
                </div>
                <div style={{
                  position: "relative",
                }}>
                  <ExampleList/>
              </div>
              </div>
            </div>
          </div>
        );
      }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
