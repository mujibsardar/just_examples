import React from "react";


function AdCards() {
    return (    
        <aside>
        <div class="">
          <div class="Hero2-ad">
            <div class="Hero-ad">
              <a href="#">
                <img
                  src="https://res.cloudinary.com/css-tricks/image/fetch/w_1200,q_auto,f_auto/https://css-tricks.com/wp-content/themes/CSS-Tricks-17/ads/wordpress/wordpress-dot-com-movement.png"
                  alt=""
                  class="Img-add"
                />
              </a>
            </div>
            <div class="disc-ad">
              <div class="disc-ad-img">
              <i class="material-icons Star-ad">code</i>

                {/* <img
                  src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1544564316/Avatar_qr6vy9.png"
                  alt=""
                  class="Star-ad"
                /> */}
              </div>
              <div class="disc-ad-under-img">
                Whatever you want to create, share, or sell, you can do
                that on
                <a href="#" class="href">
                  {" "}
                  WordPress.com.{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="Aside-ad-block">
          <div class="Hero2-ad">
            <div class="Hero-ad">
              <a href="#">
                <img
                  src="https://css-tricks.com/wp-content/themes/CSS-Tricks-17/ads/monday/monday-600x600.png"
                  alt=""
                  class="Img-add"
                />
              </a>
            </div>
            <div class="disc-ad">
              <div class="disc-ad-img">
              <i class="material-icons Star-ad">code</i>
              </div>
              <div class="disc-ad-under-img">
                <a href="#" class="href">
                  monday.com{" "}
                </a>
                is built to help you manage your projects.
              </div>
            </div>
          </div>
        </div>
        <div class="Aside-ad-block">
          <div class="Hero2-ad">
            <div class="Hero-ad">
              <a href="#">
                <img
                  src="https://css-tricks.com/wp-content/themes/CSS-Tricks-17/ads/hellosign/hellosign.jpg"
                  alt=""
                  class="Img-add"
                />
              </a>
            </div>
            <div class="disc-ad">
              <div class="disc-ad-img">
              <i class="material-icons Star-ad">code</i>
              </div>
              <div class="disc-ad-under-img">
                <a href="#" class="href">
                  Hellosign
                </a>
                : The Simple, Secure Send in Second eSignature.Try it free
                today.
              </div>
            </div>
          </div>
        </div>
        <div class="Aside-ad-block">
          <div class="Hero2-ad">
            <div class="Hero-ad">
              <a href="#">
                <img
                  src="https://css-tricks.com/wp-content/themes/CSS-Tricks-17/ads/hotjar/hotjar-600x600.png"
                  alt=""
                  class="Img-add"
                />
              </a>
            </div>
            <div class="disc-ad">
              <div class="disc-ad-img">
              <i class="material-icons Star-ad">code</i>
              </div>
              <div class="disc-ad-under-img">
                <a href="#" class="href">
                  Hotjar
                </a>{" "}
                is the fast and visual way to understand your users. See
                how people really use your site so you can make the right
                changes.
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </aside>
    );
  }
  
  export default AdCards;