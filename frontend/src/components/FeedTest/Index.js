import React from "react";
import Example from "./CodeBox";
import Header from "./Header";
import RecentExamples from "./RecentExamples";
import PopularExamples from "./PopularExamples";
import AdCards from "./AdCards";
import Footer from "../Footer/Footer";
import "./style.css";

function Feed() {
  return (
    <div>
      <Header />
      <div class="All-site">
        <main class="Main-site">          
          <div class="Long-grid-main">
            <AdCards />
            <div class="examples">
              <Example />
              <Example />
              <Example />           
              <a href="#" class="button Button-full">
                More Examples? Click Me.
              </a>
            </div>            
          </div>
          <PopularExamples />
          <RecentExamples />
          <footer>
            <Footer />
          </footer>
        </main>
      </div>
    </div>
  );
}

export default Feed;
