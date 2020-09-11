import React from "react";
import CodeHighlighter from "../CodeHighlighter";
import Tags from "../NewTags";
import Author from "../Author";

export default function Example(props) {
    return (
      <li className="display-card">
        <h3>Title Here</h3>
        <p>
          Description Here
        </p>
        <Author />
        <CodeHighlighter />
        <Tags />
      </li>
    );
};
