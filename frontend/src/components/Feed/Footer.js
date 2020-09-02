import React from "react";

const Footer = props => {
    return(
      <div className="icons">
        <a className="icon comment" href="#">
          <span className="mx-2">{props.vals.comment}</span>
        </a>
        <a className="icon retweet" href="#">
          <span className="mx-2">{props.vals.retweet}</span>
        </a>
        <a className="icon heart" href="#">
          <span className="mx-2">{props.vals.heart}</span>
        </a>
        <a className="icon envelope" href="#">
          <span className="mx-2">{props.vals.envelope}</span>
        </a>
      </div>
    );
  };

  export default Footer;