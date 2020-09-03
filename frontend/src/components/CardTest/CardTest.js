import React from "react";
import "./style.css";
import Body from "../../components/Card/Body";

export default function CardTest() {

  return (
    <div class="main">   
    <ul class="cards">
      <li class="cards_item">
        <div class="card">
          <div class="card_image"><Body /></div>
          <div class="card_content">
            <h2 class="card_title">Card Grid Layout</h2>
            <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
            <button class="btn card_btn">Read More</button>
          </div>
        </div>
      </li>
      <li class="cards_item">
        <div class="card">
          <div class="card_image"><img src="https://picsum.photos/500/300/?image=5" /></div>
          <div class="card_content">
            <h2 class="card_title">Card Grid Layout</h2>
            <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
            <button class="btn card_btn">Read More</button>
          </div>
        </div>
      </li>
      <li class="cards_item">
        <div class="card">
          <div class="card_image"><img src="https://picsum.photos/500/300/?image=11" /></div>
          <div class="card_content">
            <h2 class="card_title">Card Grid Layout</h2>
            <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
            <button class="btn card_btn">Read More</button>
          </div>
        </div>
      </li>
      <li class="cards_item">
        <div class="card">
          <div class="card_image"><img src="https://picsum.photos/500/300/?image=14" /></div>
          <div class="card_content">
            <h2 class="card_title">Card Grid Layout</h2>
            <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
            <button class="btn card_btn">Read More</button>
          </div>
        </div>
      </li>
      <li class="cards_item">
        <div class="card">
          <div class="card_image"><img src="https://picsum.photos/500/300/?image=17" /></div>
          <div class="card_content">
            <h2 class="card_title">Card Grid Layout</h2>
            <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
            <button class="btn card_btn">Read More</button>
          </div>
        </div>
      </li>
      <li class="cards_item">
        <div class="card">
          <div class="card_image"><img src="https://picsum.photos/500/300/?image=2" /></div>
          <div class="card_content">
            <h2 class="card_title">Card Grid Layout</h2>
            <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
            <button class="btn card_btn">Read More</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
  );
}
