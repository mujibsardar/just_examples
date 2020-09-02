import React from "react";
import Avatar from "./Avatar";
import Header from "./Header";
import Dropdown from "./Dropdown";
import Body from "./Body";
import Footer from "./Footer";
import "./style.css";

class Card extends React.Component {
    constructor(props) {
      super(props);
      this.state = { dropdown: false };
      this.handleToggle = this.handleToggle.bind(this);
    }
    
    handleToggle() {
      this.setState({dropdown: !this.state.dropdown});
    }
    
    render() {
      let data = this.props.stream;
      return(
        <div className="social-card" onClick={this.state.dropdown ? this.handleToggle : ''}>
          <div className="social-header">
            <Avatar image={data.avatar} />
            <Header name={data.name} username={data.user} date={data.date} />
            <Dropdown dropdown={this.state.dropdown} toggle={this.handleToggle} />
          </div>
          <div className="social-body">
            <Body text={data.text} content={data.content}/>
          </div>
          <Footer vals={data.vals} />
        </div>
      );
    }
  }

  export default Card;