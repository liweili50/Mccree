import React, { Component } from 'react';
import './article.css';

class Article extends Component {
  render() {
    return (
      <section className="article has-background-white">
        <div className="article-body">
          <h1 className="title is-3">
            Hero titleaaannn
            </h1>
          <div className="subtitle is-6">2018-10-18  分类</div>
          <div className="content">
            gitHub是一个面向开源及私有软件项目的托管平台，因为只支持git 作为唯一的版本库格式进行托管，故名gitHub。gitHub于2008年4月10日正式上线，除了git代码仓库托管及基本的 Web管理界面以外，还提供了订阅、讨论组、文本渲染、在线文件编辑...
            </div>
          <a className="button is-primary">查看全文</a>
          <hr className="hr" />
          <div className="tags level-right">
            <span className="tag">One</span>
            <span className="tag">Two</span>
            <span className="tag">Three</span>
          </div>
        </div>
      </section>
    );
  }
}

export default Article;