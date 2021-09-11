import React, { Component } from "react";
import Post from "./post";
import Card from "../../components/card/card";
import InfiniteScroll from "react-infinite-scroller";
import { getPostsList } from "../../api/post";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasMore: true,
      pageNum: 1,
      pageSize: 5,
      postList: [],
    };
    this.loadMore = this.loadMore.bind(this);
  }
  loadData() {
    let params = {
      pageSize: this.state.pageSize,
      pageNum: this.state.pageNum,
    };
    if (this.props.location.pathname === "/search") {
      let keyword = new URLSearchParams(this.props.location.search).get(
        "keyword"
      );
      params.keyword = keyword;
    }
    getPostsList(params).then((res) => {
      if (res.data.total > 0) {
        this.setState({
          postList: [...this.state.postList, ...res.data.list],
          pageNum: this.state.pageNum + 1,
        });
        if (this.state.postList.length === res.data.total) {
          this.setState({
            hasMore: false,
          });
        }
      } else {
        this.setState({
          postList: [],
          hasMore: false,
        });
      }
    });
  }
  loadMore() {
    this.loadData();
  }
  render() {
    let list = this.state.postList.map((article) => {
      return <Post key={article._id} article={article} />;
    });
    return (
      <div className="columns is-gapless">
        <InfiniteScroll
          className="column"
          pageStart={0}
          loadMore={this.loadMore}
          hasMore={this.state.hasMore}
          loader={<div key={0}>Loading ...</div>}
        >
          {this.state.postList.length === 0 && this.state.hasMore === false ? (
            <div key={0}>Accident Happened ...</div>
          ) : (
            list
          )}
        </InfiniteScroll>
        <div className="column ml-4 is-narrow is-hidden-touch">
          <Card />
        </div>
      </div>
    );
  }
}

export default (props) => <Home {...props} key={props.location.pathname} />;
