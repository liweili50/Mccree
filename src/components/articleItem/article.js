import React from "react";
import "./article.css";
import { Link } from "react-router-dom";

function Article(props) {
  const tagItems = props.article.tags.map((tag, index) => (
    <Link to={'/tags/'+tag} key={index} className="tag">
      #{tag}
    </Link>
  ));
  return (
    <div className="article has-background-white">
      <div className="article-body">
        <h1 className="title is-4">{props.article.title}</h1>
        <div className="subtitle is-6">
          {props.article.createTime}
           {/* {props.article.archive} */}
        </div>
        <div className="content">{props.article.description}</div>
        <Link to={"post/" + props.article._id} className="button is-primary">
          查看全文
        </Link>
        <hr className="hr" />
        <div className="tags level-right">
          {tagItems}
        </div>
      </div>
    </div>
  );
}

export default Article;
