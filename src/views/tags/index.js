import React, { Component } from "react";
import { Link } from "react-router-dom";
import './index.css'

let tags = ['One','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','算法','原型链'];
const tagItems = tags.map((tag, index) => (
  <Link to={'/tags/'+tag} key={tag} className="tag">
    {tag}
  </Link>
));
class Tags extends Component {
  render() {
    return (
      <div className="section is-body is-mobile">
        <div className="container">
          <div className="tags-container">
            <div className="tags-info">
              <h3>全部标签</h3>
              <p>目前共计{tags.length}个标签</p>
            </div>
            <div className="tags are-medium">
             {tagItems}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tags;
