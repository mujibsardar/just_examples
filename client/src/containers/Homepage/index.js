import React, { Component } from "react";
import Sidebar from "../../components/Sidebar";
import ListExamples from "../Examples/ListExamples";
import "./style.css";

// root component
class Home extends Component {
  render() {
    return (
      <div id="app">
        <div className="wrap-sidebar">
          <Sidebar />
        </div>
        <main className="main-content">
          <ListExamples />
        </main>
      </div>
    );
  }
}

export default Home;
