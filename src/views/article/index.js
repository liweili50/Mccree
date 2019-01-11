import React, { Component } from "react";
import "gitment/style/default.css";
import Gitment from "gitment";

class Article extends Component {
  componentDidMount() {
    const gitment = new Gitment({
      id: "1", // optional
      owner: "liweili50",
      repo: "blog-resource",
      oauth: {
        client_id: "455057ff16e070218483",
        client_secret: "1dcb080f82e4958655c4feb5bebf11310ca6face"
      }
    });

    gitment.render("comments");
  }
  render() {
    return (
      <div className="section is-body is-mobile">
        文章详情
        <div id="comments" />
      </div>
    );
  }
}

export default Article;
