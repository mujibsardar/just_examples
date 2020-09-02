import React from "react";

const Media = props => {
    let { type, source, caption } = props.media;
    let media_types = {
      text: () => {
        return (
          <div className="media-text">
            <div className={`preview ${source.style.className}`} style={{backgroundColor: source.style.bg}}>
              <h2 className="preview-txt bold">{source.title}</h2>
            </div>
            <div className="caption">
              <div className="caption-head">
                <h6 className="bold">{caption.title}</h6>
              </div>
              <div className="caption-body">
                <p>{caption.text}</p>
              </div>
              <div className="caption-foot text-muted">
                <small>{caption.source}</small>
              </div>
            </div>
          </div>
        )
      },
      image: () => <img className="media-img img-fluid" src={source.src} />
    };
    return media_types[type]();
  };

  export default Media;