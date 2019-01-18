import React from "react";
export default  function ImgBox(props) {
    return (
      <div id="imgBox">
        <div className="zoomIn">
        <img alt="markdown img" src={props.imgUrl} />
      </div>
      </div>
    );
  };
