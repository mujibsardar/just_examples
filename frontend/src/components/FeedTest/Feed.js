import React from "react";
import Body from "../Card/Body";
import "./style.css";
import Features from "./Features";

function Feed() {
  return (
    <article class="Hero-article-module-grid">
      <div class="Hero2-article">
        <header class="Article-header article">
          <strong class="Article-strong">Posted: </strong>
          <time datetime="2019-01-01" class="Article-time">
            January 30, 2019{" "}
          </time>
        </header>
        <h2 class="Article-h1 article">
          <a href="#" class="href">
            For-Loop Example, JavaScript
          </a>
        </h2>
        <div class="Article-author-grid article">
          <div class="Author-ava">
            <a href="#">
              <img
                src="https://www.vut.ac.za/wp-content/uploads/2016/02/blank-profile-picture-973460_1280-283x189.png"
                class="Ava"
              />
            </a>
          </div>
          <div class="Author-name-area-grid">
            <div class="Author-pref pref">Author</div>
            <a href="#" class="Author-name-grid href under-pref">
              Joe Schmo
            </a>
          </div>
          <div class="Article-comments-grid Article-comments">
            <div class="Article-comments-pref pref">Comments</div>
            <div class="Article-arrow-grid" class="href">
              <div>
                <a href="#" class="href under-pref">
                  Join the Conversation
                </a>
              </div>
              <div>
                <a href="#" class="href">
                  &#x279B
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="Article-about article">
          <Body />
          <p class="Article-about-p-grid">
            What do we mean by 1:1 (pronounced one-on-one)? This is typically a
            private conversation between an Engineering Manager/Lead and their
            Employee. I personally have been a Lead, a Manager, and also an …
            <a href="#" class="Article-about-end-p">
              Google
            </a>
            <a href="#" class="Article-about-end-p">
              Stack Overflow
            </a>
          </p>
        </div>

        <div class="Article-href article">
          <a href="#" class="Article-href-foot href">
            career
          </a>
          <a href="#" class="Article-href-foot href">
            engineering management
          </a>
          <a href="#" class="Article-href-foot href">
            leading
          </a>
          <a href="#" class="Article-href-foot href">
            meetings
          </a>
        </div>
        <Features />
      </div>
    </article>
  );
}

export default Feed;
