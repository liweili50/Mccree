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
        <div className="container tags-container">
        <div className="tags-info">
            <h3>全部标签</h3>
            <p>目前共计59个标签</p>
        </div>
          <div class="tags are-medium">
            <span class="tag">One</span>
            <span class="tag">Two</span>
            <span class="tag">Three</span>
            <span class="tag">Four</span>
            <span class="tag">Five</span>
            <span class="tag">Six</span>
            <span class="tag">Seven</span>
            <span class="tag">Eight</span>
            <span class="tag">Nine</span>
            <span class="tag">Ten</span>
            <span class="tag">Eleven</span>
            <span class="tag">Twelve</span>
            <span class="tag">Thirteen</span>
            <span class="tag">Fourteen</span>
            <span class="tag">Fifteen</span>
            <span class="tag">Sixteen</span>
            <span class="tag">Seventeen</span>
            <span class="tag">Eighteen</span>
            <span class="tag">Nineteen</span>
            <span class="tag">Twenty</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Tags;
