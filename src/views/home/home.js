import React, { Component } from "react";
import "./home.css";
import Article from "../../components/articleItem/article";
import Card from "../../components/card/card";
import InfiniteScroll from "react-infinite-scroller";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasMore: false,
      articleList: []
    };

    this.loadMore = this.loadMore.bind(this);
  }
  componentDidMount() {
    setTimeout(() => {
      this.loadData();
    }, 500);
    // console.log(
    //   "%c%s",
    //   "color: black; background: white; font-size: 24px;",
    //   "来了...老弟？ 留下您的反馈呗"
    // );
  }
  loadData() {
    this.setState({
      articleList: [
        {
          id: "1",
          title: "第一篇文章",
          creatTime: "2018-11-12 10:23:32",
          content:
            "gitHub是一个面向开源及私有软件项目的托管平台，因为只支持git 作为唯一的版本库格式进行托管，故名gitHub。gitHub于2008年4月10日正式上线，除了git代码仓库托管及基本的 Web管理界面以外，还提供了订阅、讨论组、文本渲染、在线文件编辑...",
          tags: ["求和", "算法"],
          archive: "技术"
        },
        {
          id: "2",
          title: "第一篇文章",
          creatTime: "2018-11-12",
          content:
            "gitHub是一个面向开源及私有软件项目的托管平台，因为只支持git 作为唯一的版本库格式进行托管，故名gitHub。gitHub于2008年4月10日正式上线，除了git代码仓库托管及基本的 Web管理界面以外，还提供了订阅、讨论组、文本渲染、在线文件编辑...",
          tags: ["one", "two"],
          archive: "技术"
        },
        {
          id: "3",
          title: "第一篇文章",
          creatTime: "2018-11-12",
          content:
            "gitHub是一个面向开源及私有软件项目的托管平台，因为只支持git 作为唯一的版本库格式进行托管，故名gitHub。gitHub于2008年4月10日正式上线，除了git代码仓库托管及基本的 Web管理界面以外，还提供了订阅、讨论组、文本渲染、在线文件编辑...",
          tags: ["one", "two"],
          archive: "技术"
        }
      ]
    });
  }
  loadMore() {
    console.log("test");
  }
  render() {
    let list = this.state.articleList.map(article => {
      return <Article key={article.id} article={article} />;
    });
    return (
      <div className="section is-body is-mobile">
        <div className="container">
          <div className="main-content">
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



      </div>
    );
  }
}

export default Home;
