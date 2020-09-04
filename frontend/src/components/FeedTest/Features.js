import React from "react";

export default class Features extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentNumber: 18,
      retweetNumber: 23,
      heartNumber: 35,
      messageNumber: 23,
      isRetweetToggleOn: false,
      isHeartToggleOn: false,
    };
    this.handleComment = this.handleComment.bind(this);
    this.handleRetweet = this.handleRetweet.bind(this);
    this.handleHeart = this.handleHeart.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
  }
  handleComment() {
    this.setState({
      commentNumber: this.state.commentNumber + 1,
    });
  }
  handleRetweet() {
    this.setState((prevState) => ({
      isRetweetToggleOn: !prevState.isRetweetToggleOn,
    }));
    this.setState({
      retweetNumber: this.state.retweetNumber + 1,
    });
    if (this.state.isRetweetToggleOn === true) {
      this.setState({
        retweetNumber: this.state.retweetNumber - 1,
      });
    }
  }
  handleHeart() {
    this.setState((prevState) => ({
      isHeartToggleOn: !prevState.isHeartToggleOn,
    }));
    this.setState({
      heartNumber: this.state.heartNumber + 1,
    });
    if (this.state.isHeartToggleOn === true) {
      this.setState({
        heartNumber: this.state.heartNumber - 1,
      });
    }
  }
  handleMessage() {
    this.setState({
      messageNumber: this.state.messageNumber + 1,
    });
  }
  render() {
    let retweetFeatureStyle = {
      color: "",
    };
    let heartFeatureStyle = {
      color: "",
    };
    if (this.state.isRetweetToggleOn === true) {
      retweetFeatureStyle.color = "#2ec570";
    }
    if (this.state.isHeartToggleOn === true) {
      heartFeatureStyle.color = "#e02760";
    }
    return (
      <div className="socialFeatures">
        <span className="socialFeature" onClick={this.handleComment}>
          <i className="far fa-comment" />
          <span>{this.state.commentNumber}</span>
        </span>
        <span
          className="socialFeature retweet"
          style={retweetFeatureStyle}
          onClick={this.handleRetweet}
        >
          <i className="fas fa-retweet" />
          <span>{this.state.retweetNumber}</span>
        </span>
        <span
          className="socialFeature heart"
          style={heartFeatureStyle}
          onClick={this.handleHeart}
        >
          <i className="fas fa-heart" />
          <span>{this.state.heartNumber}</span>
        </span>
        <span className="socialFeature message" onClick={this.handleMessage}>
          <i className="far fa-envelope" />
          <span>{this.state.messageNumber}</span>
        </span>
      </div>
    );
  }
}
