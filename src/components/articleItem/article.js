import React from "react";
import "./article.css";
import { Link } from "react-router-dom";

function Article(props) {
  const tagItems = props.article.tags.map((tag, index) => (
    <span key={index} className="tag">
      {tag}
    </span>
  ));
  return (
    <section className="article has-background-white">
      <div className="article-body">
        <h1 className="title is-3">{props.article.title}</h1>
        <div className="subtitle is-6">
          {props.article.creatTime} {props.article.archive}
        </div>
        <div className="content">{props.article.content}</div>
        <Link to={"article/" + props.article.id} className="button is-primary">
          查看全文
        </Link>
        <hr className="hr" />
        <div className="tags level-right">
          {tagItems}
        </div>
      </div>
    </section>
  );
}

export default Article;
