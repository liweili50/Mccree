import React from "react";
import dayjs from "dayjs";
import { Link } from "react-router-dom";

function Article(props) {
  const tagItems = props.article.tags.map((tag, index) => (
    <Link to={"/tag/" + tag} key={index} className="tag">
      #{tag}
    </Link>
  ));
  return (
    <div className="box has-background-white">
      <h4 className="title is-4">{props.article.title}</h4>
      <p className="subtitle is-6 pt-2 mb-4">
        {dayjs(props.article.createTime).format("YYYY-MM-DD HH:mm:ss")}
      </p>
      <div className="content">
        {props.article.description || props.article.excerpt}
      </div>
      <Link
        to={"post/" + props.article._id}
        className="button  is-primary is-small"
      >
        查看全文
      </Link>
      <hr className="hr" />
      <div className="tags level-right">{tagItems}</div>
    </div>
  );
}

export default Article;
