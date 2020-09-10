import React from "react";
import CodeHighlighter from "../../../components/CodeHighlighter";
import Tags from "../../../components/NewTags";
import Author from "../../../components/Author";

// Display Examples
const ListExamples = () => (
  <div className="search-examples">
    <ul>
      <li className="display-card">
        <h3>for-loop, javascript</h3>
        <p>
          A simple, yet short, description goes here regarding the posted
          example by user.
        </p>
        <Author />
        <CodeHighlighter />
        <Tags />
      </li>

      <li className="display-card">
        <h3>npm create-react-app</h3>
        <p>
          A simple, yet short, description goes here regarding the posted
          example by user.
        </p>
        <Author />
        <CodeHighlighter />
        <Tags />
      </li>
    </ul>
  </div>
);

export default ListExamples;
