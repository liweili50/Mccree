import React, { Component } from "react";
import "./home.css";
import Article from "../../components/articleItem/article";
import Card from "../../components/card/card";
import InfiniteScroll from "react-infinite-scroller";
import { getArticleList } from '../../api/post'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasMore: true,
      pageNum:1,
      pageSize:2,
      articleList: []
    };
    this.loadMore = this.loadMore.bind(this);
  }
  loadData() {
    let params = {
      pageSize: this.state.pageSize,
      page: this.state.pageNum
    }
    if(this.props.location.pathname==='/search') {
      let keyword = new URLSearchParams(this.props.location.search).get('keyword')
      params.keyword = keyword
    }
    getArticleList(params).then(res=>{
      if(res.data.total>0){
        this.setState({
          articleList:[...this.state.articleList,...res.data.articles],
          pageNum:this.state.pageNum+1
        })
        if(this.state.articleList.length===res.data.total) {
          this.setState({
            hasMore:false
          })
        }
      }else {
        this.setState({
          articleList:[],
          hasMore:false
        })
      }
    })
  }
  loadMore() {
    this.loadData();
  }
  render() {
    let list = this.state.articleList.map(article => {
      return <Article key={article._id} article={article} />;
    });
    return (
      <div className="section is-body is-mobile">
        <div className="container">
            <div className="columns">
              <InfiniteScroll
                className="column"
                pageStart={0}
                loadMore={this.loadMore}
                hasMore={this.state.hasMore}
                loader={<div key={0}>Loading ...</div>}
              >
                {list}
              </InfiniteScroll>
              <div className="column is-narrow is-narrow-fullhd is-hidden-touch">
                <Card />
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default (props)=><Home {...props} key={props.location.pathname} />
