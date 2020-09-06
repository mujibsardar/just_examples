import React from "react";
import CodeHighlighter from "../CodeHighlighter";
import "./style.css";


export default function ExampleCard() {
    return (    
        <example class="Hero-example-module-grid">
                <div class="Hero2-example">
                  <header class="example">
                    <strong class="example-strong">Examples</strong>
                    <time datetime="2019-01-01" class="example-time">
                      January 30, 2019{" "}
                    </time>
                  </header>
                  <h2 class="example">
                    <a href="#" class="href">
                      JavaScript For-Loop
                    </a>
                  </h2>
                  <div class="example-author-grid example">
                    <div>
                      <a href="#">
                        <img
                          src="https://secure.gravatar.com/avatar/48cfd8342f9b9e5b7970f63afb0a8ee3?s=80&d=retro&r=pg"
                          class="Ava"
                        />
                      </a>
                    </div>
                    <div>
                      <div class="pref">Author</div>
                      <a href="#" class="href under-pref">
                        Sarah Drasner
                      </a>
                    </div>
                    <div>
                      <div class="pref">Comments</div>
                      <div class="example-arrow-grid" class="href">
                        <div>
                          <a href="#" class="href under-pref">
                            Join the Conversation
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="example">

                    <CodeHighlighter />
                  
                  
                    <p class="example-about-p-grid">
                      this is a simple explantion of the above code snippet.{" "}
                      <a href="#" class="example-about-end-p">
                        Read example
                      </a>
                    </p>
                  </div>
                  <div class="example-href example">
                    <a href="#" class="example-href-foot href">
                      career
                    </a>
                    <a href="#" class="example-href-foot href">
                      engineering management
                    </a>
                    <a href="#" class="example-href-foot href">
                      leading
                    </a>
                    <a href="#" class="example-href-foot href">
                      meetings
                    </a>
                  </div>
                </div>
              </example>
    );
  }
  
  