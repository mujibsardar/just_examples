import React, { Component } from "react";
import Chips from "../Chips/Chips";
import "./style.css";
import Feed from "./Feed";

// Sidebar
const Sidebar = (props) => (
  <div className="sidebar">
    <h1 className="sidebar__title">
      <i className="material-icons">code</i>
      {props.appTitle}
    </h1>

    <div className="sidebar__user">
      <div class="searchContainer">
        <input
          id="searchBar"
          class="searchbar"
          type="text"
          placeholder="Search..."
        />
        <a id="btnSearch" class="btn-search">
          <i class="fa fa-search"></i>
        </a>
      </div>

      <div className="bio">{props.desc}</div>

      <div className="badges">
        <div className="badge support">Support</div>
        <div className="badge gist">GitHub</div>
      </div>

      <div className="bio">Popular tags:</div>
      <Chips />

      <a className="github-link" target="_blank">
        &reg; 2020 Just Examples
      </a>
    </div>
  </div>
);

// Main
const Examples = (props) => (
  <div className="repositories">
    <h2 className="repositories__title">{props.search}</h2>

    <ul>
      <li className="repo">
        <Feed />
      </li>
    </ul>
  </div>
);

// Root
class MyApp extends React.Component {
  state = {
    appTitle: "Just Examples",
    desc:
      "Just Examples is an entirely independent project, so support to keep building is always appreciated.",
    search: "search result title",
    support: null,
  };

  render() {
    return (
      <div id="app">
        <div className="wrap-sidebar">
          <Sidebar appTitle={this.state.appTitle} desc={this.state.desc} />
        </div>
        <main className="main-content">
          <Examples search={this.state.search} />
          <footer></footer>
        </main>
      </div>
    );
  }
}

export default MyApp;
