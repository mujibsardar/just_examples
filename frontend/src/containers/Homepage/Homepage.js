import React from "react";
import AdCards from "../../components/Ads/AdCards";
import CodeHighlighter from "./CodeHighlighter";
import Chips from "../../components/Chips/Chips";
import Author from "../../components/Author/Author";
import "./style.css";

// Sidebar
const Sidebar = () => (
  <div className="sidebar">
    <div className="ads">
      <AdCards />
    </div>
  </div>
);

// Search examples
const Cards = (props) => (
  <div className="search-examples">
    <h2 className="search-title">Search Title: Example</h2>
    <ul>
      <li className="display-card">
        <h3>for-loop, javascript</h3>
        <p>
          A simple, yet short, description goes here regarding the posted
          example by user.
        </p>
        <Author />
        <CodeHighlighter />
        <Chips />
      </li>

      <li className="display-card">
        <h3>npm create-react-app</h3>
        <p>
          A simple, yet short, description goes here regarding the posted
          example by user.
        </p>
        <Author />
        <CodeHighlighter />
        <Chips />
      </li>
    </ul>
  </div>
);

// root component
class Landing extends React.Component {
  render() {
    return (
      <div id="app">
        <div className="wrap-sidebar">
          <Sidebar />
        </div>
        <main className="main-content">
          <Cards />
        </main>
      </div>
    );
  }
}

export default Landing;
