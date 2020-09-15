import React from "react";
import CardContent from "./CardContent";
import "./style.css";

export default function TabbedCard() {
  return (
    <div class="card-container">
      <div class="card-tabbed">
        <CardContent />
      </div>
    </div>
  );
}