import React, { Component } from "react";
import AdCards from "../Ads";

// Ad Sidebar
const Sidebar = () => {
  return (
  <div className="sidebar">
    <div className="ads">
      <AdCards />
    </div>
  </div>
  );
};

export default Sidebar;
