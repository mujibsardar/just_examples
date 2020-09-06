import React from "react";
import ExampleCard from "./ExampleCard/ExampleCard";
import RecentExamples from "../RecentExamples/RecentExamples";
import PopularExamples from "../PopularExamples/PopularExamples";
import AdCards from "../Ads/AdCards";
import "./style.css";

function Feed() {
  return (
    <div>
      {/* <Navbar /> */}
      <div class="All-site">
        <main class="Main-site">          
          <div class="Long-grid-main">
            <AdCards />
            <div class="examples">
              <ExampleCard />
              <ExampleCard />
              <ExampleCard />           
              <a href="#" class="button Button-full">
                More Examples? Click Me.
              </a>
            </div>            
          </div>
          <PopularExamples />
          <RecentExamples />
          {/* <footer>
            <Footer />
          </footer> */}
        </main>
      </div>
    </div>
  );
}

export default Feed;
