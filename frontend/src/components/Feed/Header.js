import React from "react";

const Header = props => {
    return(
      <div className="header">
        <span className="name bold">{props.name}</span>
        <span className="username text-muted ml-2">{'@' + props.username}</span>
        <span className="dot text-muted mx-2" />
        <span className="date text-muted">{props.date}</span>
      </div>
    );
  };

  export default Header;