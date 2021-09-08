import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { getPostsByTag } from "../../api/post";

const ArticleList = function (props) {
  const list = props.list;
  const listItems = list.map((article) => (
    <li key={article._id}>
      <span className="icon">
        <i className="czs-square-o" aria-hidden="true" />
      </span>
      <Link to={"/post/" + article._id}>
        <span>
          <span className="time">{article.createTime}</span>
          {article.title}
        </span>
      </Link>
    </li>
  ));
  return <React.Fragment>{listItems}</React.Fragment>;
};
class Tag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
    this.handleGetArticleList = this.handleGetArticleList.bind(this);
  }
  componentDidMount() {
    this.handleGetArticleList();
  }
  handleGetArticleList() {
    getPostsByTag({ tag: this.props.match.params.id }).then((res) => {
      this.setState({
        list: res.data,
      });
    });
  }
  render() {
    return (
      <div className="tag-content has-background-white">
        <h5 className="is-size-4">{this.props.match.params.id}</h5>
        <ul className="article-list">
          <ArticleList list={this.state.list} />
        </ul>
      </div>
    );
  }
}

export default Tag;
