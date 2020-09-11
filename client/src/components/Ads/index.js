import React, { Component } from "react";
import "./style.css";


export default function AdCards() {
    return (
        <aside>
        <div>
          <div>
            <div>
              <a href="#">
                <img
                  src="https://res.cloudinary.com/css-tricks/image/fetch/w_1200,q_auto,f_auto/https://css-tricks.com/wp-content/themes/CSS-Tricks-17/ads/wordpress/wordpress-dot-com-movement.png"
                  alt=""
                  className="img-add"
                />
              </a>
            </div>
            <div className="disc-ad">
              <div>
              <i className="material-icons code-ad">code</i>
              </div>

            </div>
          </div>
        </div>
        <div className="aside-ad-block">
          <div>
            <div>
              <a href="#">
                <img
                  src="https://css-tricks.com/wp-content/themes/CSS-Tricks-17/ads/monday/monday-600x600.png"
                  alt=""
                  className="img-add"
                />
              </a>
            </div>
            <div className="disc-ad">
              <div>
              <i className="material-icons code-ad">code</i>
              </div>
            </div>
          </div>
        </div>
        <div className="aside-ad-block">
          <div>
            <div>
              <a href="#">
                <img
                  src="https://css-tricks.com/wp-content/themes/CSS-Tricks-17/ads/hellosign/hellosign.jpg"
                  alt=""
                  className="img-add"
                />
              </a>
            </div>
            <div className="disc-ad">
              <div>
              <i className="material-icons code-ad">code</i>
              </div>
            </div>
          </div>
        </div>
        <div className="aside-ad-block">
          <div>
            <div>
              <a href="#">
                <img
                  src="https://css-tricks.com/wp-content/themes/CSS-Tricks-17/ads/hotjar/hotjar-600x600.png"
                  alt=""
                  className="img-add"
                />
              </a>
            </div>
            <div className="disc-ad">
              <div>
              <i className="material-icons code-ad">code</i>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </aside>
    );
  }
