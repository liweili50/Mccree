import React, { Component } from "react";
// import { Link } from "react-router-dom";
import './index.css'

// const tagItems = props.article.tags.map((tag, index) => (
//   <Link to={'/tags/'+tag} key={index} className="tag">
//     #{tag}
//   </Link>
// ));
class Tags extends Component {
  render() {
    return (
      <div className="section is-body is-mobile">
        <div className="container">
          <div className="tags-container">
            <div className="tags-info">
              <h3>全部标签</h3>
              <p>目前共计59个标签</p>
            </div>
            <div className="tags are-medium">
              <span className="tag">One</span>
              <span className="tag">Two</span>
              <span className="tag">Three</span>
              <span className="tag">Four</span>
              <span className="tag">Five</span>
              <span className="tag">Six</span>
              <span className="tag">Seven</span>
              <span className="tag">Eight</span>
              <span className="tag">Nine</span>
              <span className="tag">Ten</span>
              <span className="tag">Eleven</span>
              <span className="tag">Twelve</span>
              <span className="tag">Thirteen</span>
              <span className="tag">Fourteen</span>
              <span className="tag">Fifteen</span>
              <span className="tag">Sixteen</span>
              <span className="tag">Seventeen</span>
              <span className="tag">Eighteen</span>
              <span className="tag">Nineteen</span>
              <span className="tag">Twenty</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tags;
