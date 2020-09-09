import React, { Component } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "./style.css";

const LABEL_DEFAULT = "Copy";
const LABEL_COPIED = "Copied!";

class SyntaxHigh extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copying: false,
      error: false,
    };

    this.textArea = React.createRef();

    this.copyToClipboard = this.copyToClipboard.bind(this);
  }

  copyToClipboard(e) {
    this.textArea.current.select();

    // Update the label, on success/error, then reset it after some time passes
    try {
      document.execCommand("copy");
      this.setState({ copying: true });
    } catch (e) {
      this.setState({ error: true });
    } finally {
      setTimeout(() => {
        this.setState({
          copying: false,
          error: false,
        });
      }, 1000);
    }
  } 

  render() {
   
    return (
      <div className="SyntaxHighlighter" {...this.props}>
        <SyntaxHighlighter
          aria-hidden="true" /* don't let screenreaders announce the formatted code sample */
          style={monokai}
          language={this.props.language}
        >
          {this.props.children}
        </SyntaxHighlighter>
        <textarea /* announce this example to screenreaders */
          className="SyntaxHighlighter__hiddenTextArea"
          ref={this.textArea}
          defaultValue={this.props.children}
        />
        <button className="SyntaxHighlighter__copyBtn" onClick={this.copyToClipboard}>
          {!this.state.copying && !this.state.error && LABEL_DEFAULT}
          {this.state.copying && !this.state.error && LABEL_COPIED}
          {this.state.error && "Unable to copy"}
        </button>
      </div>
    );
  }
}

export default SyntaxHigh;
