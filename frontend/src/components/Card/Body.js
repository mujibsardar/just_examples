import React from "react";
import CodeSnippet from "../CodeSnippet/CodeSnippet";

export default class Body extends React.Component {
  render() {
    return (
      <div className="post__content">
        <CodeSnippet language="javascript">
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
        </CodeSnippet>
      </div>
    );
  }
}
