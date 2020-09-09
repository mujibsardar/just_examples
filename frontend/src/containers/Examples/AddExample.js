import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { submitNewExample } from "../../store/actions/examplesActions";
import TagsInput from "./Tags/Tags";
import "./style.css";

class AddExample extends React.Component {
  state = {
    example: {},
    errors: {},
  };

  handleInputChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    // TODO put this back in later
    //const errors = { ...this.state.errors, ...this.handleValidation(field, value) }

    this.setState((prevState) => {
      return {
        ...prevState,
        example: {
          ...prevState.example,
          [field]: value,
          // Add Tags field here
        },
        //errors: {...errors}
        errors: {},
      };
    });
  };


  handleNewExampleSubmit = (e) => {
    e.preventDefault();
    // e.stopPropagation();
    let errors = { ...this.state.errors };
    // TODO Put this back in later
    //const formValuesValid = Object.keys(errors).filter(field => errors[field] !== "").length === 0 ? true : false;
    // if ( !formValuesValid ) {
    if (false) {
      return;
    } else {
      this.props
        .submitNewExample({
          ...this.state.example
        })
        .then((res) => {
          if (res.errors) {
            this.setState((prevState) => {
              return {
                ...prevState,
                example: { ...prevState.example },
                errors: { ...prevState.errors, ...res.errors },
              };
            });
          } else {
            // If no errors go back to home page
            this.props.history.push("/");
          }
        });
    }
  };

  handleNewTag = (tags) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        example: {
          ...prevState.example,
          major_tags: tags
        },
        // TODO Put back later
        //errors: {...errors}
        errors: {},
      };
    });
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
            <div className="input-field col s12">
              <input
                name="title"
                onChange={this.handleInputChange}
                id="title"
                type="text"
                className="validate"
              />
              <label htmlFor="title">Title</label>
            </div>
          </div>

          <div className="field tnb">
            <label htmlFor="content">Code Example</label>
            <textarea
              onChange={this.handleInputChange}
              name="content"
            ></textarea>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <TagsInput onNewTagSubmission={this.handleNewTag} />
            </div>
          </div>
        </form>
        <button
          className="btn waves-effect waves-light blue accent-4"
          onClick={this.handleNewExampleSubmit}
        >
          Submit
          <i className="material-icons right">send</i>
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // TODO Look into this and fix it.
    //isAuthenticated: state.users.isAuthenticated,
    //authenticatedUsername: state.users.authenticatedUsername
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewExample: (exampleData) => dispatch(submitNewExample(exampleData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddExample);
