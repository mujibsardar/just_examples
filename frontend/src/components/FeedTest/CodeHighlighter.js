import React from "react";
import SyntaxHighlighter from "../SyntaxHighlighter/SyntaxHighlighter";

export default class CodeHighlighter extends React.Component {
  render() {
    return (
      <div className="post-content">
        <SyntaxHighlighter language="javascript">
          {`function createClassNameString(classNames) {
  return classNames.join(' ');
}

function createChildren(style, useInlineStyles) {
  let childrenCount = 0;
  return children => {
    childrenCount += 1;
    return children.map((child, i) => createElement({
      node: child,
      style,
      useInlineStyles
      }));
    }
  }
  `}
        </SyntaxHighlighter>
      </div>
    );
  }
}
