import React from "react";
import "./style.css";

export default class Footer extends React.Component {
  render() {
    return (
        <div id="custom-footer">
        <div className="custom-footer-wrapper">
            <div className="media-block">
                <a className="media-link" href="https://twitter.com/nasclubdebates">
                    <img src="https://s3.amazonaws.com/files.enjin.com/851662/Footer_Images_Optimised/Twitter-min.png" />
                </a>
                <a className="media-link" href="https://www.youtube.com/channel/UCvUrSp0TTR2I05dS4GVdkdA">
                    <img src="https://s3.amazonaws.com/files.enjin.com/851662/Footer_Images_Optimised/Youtube-min.png" />
                </a>
                <a className="media-link" href="https://www.twitch.tv/nasclubdebates">
                    <img src="https://s3.amazonaws.com/files.enjin.com/851662/Footer_Images_Optimised/Twitch-min.png" />
                </a>
                <a className="media-link discord-link" href="https://discord.gg/aGNz5KE">
                    <img src="https://s3.amazonaws.com/files.enjin.com/851662/Footer_Images_Optimised/Discord-min.png"/>
                </a>
            </div>
            <div className="text">
                Have any questions or need assistance?
            </div>
            <div className="help-block">
                <a className="help-button" href="/support">
                    SUPPORT
                </a>
                <a className="help-button" href="/STORE">
                    STORE
                </a>
            </div>
            <div className="copyright-block">
                <i className="material-icons">copyright</i> 2020 Just Examples<br/>                
            </div>
        </div>
    </div>    
    );
  }
}
