import React, { Component } from "react";
import Gitalk from 'gitalk'
import "github-markdown-css/github-markdown.css";
import "./index.css";
import 'gitalk/dist/gitalk.css'
import { getArticle } from '../../api/post'

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true,
      imgUrl: "",
      article: null,
      content: ''
    };
    this.handleGetArticle = this.handleGetArticle.bind(this);
  }
  componentDidMount() {
    this.handleGetArticle()
    const gitalk = new Gitalk({
      clientID: '455057ff16e070218483',
      clientSecret: '1dcb080f82e4958655c4feb5bebf11310ca6face',
      repo: 'liweili50.github.io',
      owner: 'liweili50',
      admin: ['liweili50'],
      id: this.props.match.params.id,      // Ensure uniqueness and length less than 50
      distractionFreeMode: true  // Facebook-like distraction free mode
    })

    gitalk.render('comments')
    window.scrollTo(0, 0);
  }
  getArticleContent(obj) {
    var el = document.createElement("div");
    el.innerHTML = obj.content;
    let baseUrl = 'https://github.com/liweili50/liweili50.github.io/blob/dev/content/blog/'
    let imgs = Array.from(el.querySelectorAll('img'))
    imgs.forEach(item => {
      let url = item.getAttribute('src').substring(1)
      item.src = baseUrl + obj.name + url + '?raw=true'
    })
    return el.innerHTML;
  }
  handleGetArticle() {
    getArticle(this.props.match.params.id).then(res => {
      this.setState({
        article: res.data.article,
        content: this.getArticleContent(res.data.article)
      })
      document.title = res.data.article.title
    })
  }
  render() {
    return (
      <div className="section is-body is-mobile">
        <div className="container">
          <div className="article-container has-background-white">
            <h1 className="subtitle is-2">{this.state.article !== null ? this.state.article.title : ''}</h1>
            <div className="media-content">
              <p>{this.state.article !== null ? this.state.article.createTime : ''}</p>
            </div>
            <div
              id="content"
              className="markdown-body"
              dangerouslySetInnerHTML={{
                __html: this.state.content !== '' ? this.state.content : ''
              }}
            />
            <hr />
            <div id="comments" />
          </div>
        </div>
      </div>
    );
  }
}

export default Article;
