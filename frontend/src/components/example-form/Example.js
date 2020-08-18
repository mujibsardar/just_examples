import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./post.css";

export default class Example extends React.Component {

  state = {
      example_post: {},
      errors: {}
  };


  handleInputChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;

        //const errors = { ...this.state.errors, ...this.handleValidation(field, value) }

        this.setState((prevState) => {
            return {
                ...prevState,
                example_post: {
                    ...prevState.example_post,
                    [field]: value
                },
                //errors: {...errors}
                errors: {}
            };
        }, () => localStorage.setItem('AddExamplePost', JSON.stringify(this.state)));
    }

  render() {
    return (
      <div className="row">
        <div className="col s12" style={{ paddingLeft: "11.250px" }}>
          <h4>
            <b>Post</b> an Example
          </h4>
          <p className="grey-text text-darken-1">Keep it simple</p>
        </div>
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input id="first_name" type="text" className="validate" />
              <label htmlFor="first_name">First Name</label>
            </div>
            <div className="input-field col s6">
              <input id="last_name" type="text" className="validate" />
              <label htmlFor="last_name">Last Name</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <input name="title" onChange={this.handleInputChange} id="title" type="text" className="validate" />
              <label htmlFor="email">Title</label>
            </div>
          </div>

          <div className="field tnb">
            <label htmlFor="msg">Code Example</label>
            <textarea onChange={this.handleInputChange} name="content"></textarea>
          </div>

          <div className="row">
            <div className="col s12">
              <div className="input-field inline">
                <a className="btn-floating btn-large waves-effect waves-light red">
                  <i className="material-icons">add</i>
                </a>
                <span
                  className="helper-text"
                  data-error="wrong"
                  data-success="right"
                >
                  Add tags
                </span>
              </div>
            </div>

            <div className="tags">
              <a className="waves-effect waves-light btn">
                <i className="material-icons left">cloud</i>C++
              </a>
              <a className="waves-effect waves-light btn">
                <i className="material-icons left">cloud</i>Python
              </a>
              <a className="waves-effect waves-light btn">
                <i className="material-icons right">cloud</i>JavaScript
              </a>
              <a className="waves-effect waves-light btn">
                <i className="material-icons left">cloud</i>HTML
              </a>
              <a className="waves-effect waves-light btn">
                <i className="material-icons left">cloud</i>CSS
              </a>
              <a className="waves-effect waves-light btn">
                <i className="material-icons left">cloud</i>React
              </a>
              <a className="waves-effect waves-light btn">
                <i className="material-icons left">cloud</i>jQuery
              </a>
              <a className="waves-effect waves-light btn">
                <i className="material-icons left">cloud</i>Java
              </a>
              <a className="waves-effect waves-light btn">
                <i className="material-icons left">cloud</i>C#
              </a>
              <a className="waves-effect waves-light btn">
                <i className="material-icons left">cloud</i>SCSS
              </a>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
