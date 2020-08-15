import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./post.css";

export default class Post extends React.Component {
  render() {
    return (
      <div class="row">
        <div className="col s12" style={{ paddingLeft: "11.250px" }}>
          <h4>
            <b>Post</b> an Example
          </h4>
          <p className="grey-text text-darken-1">Keep it simple</p>
        </div>

        <form class="col s12">
          <div class="row">
            <div class="input-field col s6">
              <input id="first_name" type="text" class="validate" />
              <label for="first_name">First Name</label>
            </div>
            <div class="input-field col s6">
              <input id="last_name" type="text" class="validate" />
              <label for="last_name">Last Name</label>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s12">
              <input id="email" type="email" class="validate" />
              <label for="email">Title</label>
            </div>
          </div>

          <div className="field tnb">
            <label for="msg">Message</label>
            <textarea name="msg"></textarea>
          </div>

          <div class="row">
            <div class="col s12">              
              <div class="input-field inline">
                <a className="btn-floating btn-large waves-effect waves-light red">
                  <i className="material-icons">add</i>
                </a>
                <span
                  class="helper-text"
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
