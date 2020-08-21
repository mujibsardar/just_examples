import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { submitNewExample } from "../../store/actions/examplesActions";
import "./example.css";
import TagInput from "../../components/tags/Tags";

class Example extends React.Component {
  state = {
    example_post: {},
    errors: {},
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
          [field]: value,
        },
        //errors: {...errors}
        errors: {},
      };
    });
    console.log(JSON.stringify(this.state));
  };

  handleNewExampleSubmit = (e) => {
    e.preventDefault();
    let errors = { ...this.state.errors };
    // TODO Put this back in later
    //const formValuesValid = Object.keys(errors).filter(field => errors[field] !== "").length === 0 ? true : false;
    // if ( !formValuesValid ) {
    if (false) {
      return;
    } else {
      // TODO Change from hard coded user id.
      this.props
        .submitNewExample({
          ...this.state.example_post,
          author: "5f384551df9b7212307c2f15",
        })
        .then((res) => {
          if (res.errors) {
            this.setState((prevState) => {
              return {
                ...prevState,
                example_post: { ...prevState.example_post },
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

  render() {
    const data = ["HTML", "CSS", "JavaScript", "SASS", "Java", "Python"];

    return (
      <div className="row">
        <div className="col s12" style={{ paddingLeft: "11.250px" }}>
          <h4>
            <b>Post</b> an Example
          </h4>
          <p className="grey-text text-darken-1">Keep it simple</p>
        </div>
        <form className="col s12" onSubmit={this.handleNewExampleSubmit}>
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
        </form>

        <div className="row">
          <div className="col s12">
            <TagInput data={data} />
          </div>
        </div>


        <button class="btn waves-effect waves-light" type="submit" name="action">Submit
    <i class="material-icons right">send</i>
  </button>

        {/* <button className="btn btn-success">Submit</button> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(Example);
