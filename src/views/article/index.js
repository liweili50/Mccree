import React, { Component } from "react";
import "viewerjs/dist/viewer.css";
import Viewer from "viewerjs";
import "github-markdown-css/github-markdown.css";
import "./index.css";

import 'gitalk/dist/gitalk.css'
import Gitalk from 'gitalk'
import { getArticle } from '../../api/post'

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true,
      imgUrl: "",
      article: null
    };
    this.loadData= this.loadData.bind(this);
  }
  componentDidMount() {
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
    this.loadData()
  }
  parseDom(arg) {
　　 var objE = document.createElement("div");
　　 objE.innerHTML = arg;
    console.log(objE.querySelectorAll('p'))
    let headerUrl = 'https://github.com/liweili50/liweili50.github.io/blob/dev/content/blog/'
    let imgs = Array.from(objE.querySelectorAll('img'))
    imgs.forEach(item=>{
      let url = item.getAttribute('src').substring(1)
      item.src = headerUrl+this.state.article.name+url+'?raw=true'
    })
    // let url = objE.querySelector('img').getAttribute('src')
    // objE.querySelector('img').src = `https://github.com/liweili50/liweili50.github.io/blob/dev/content/blog/${this.state.article.name}${url}?raw=true`
　　 return objE;
  }
  loadData() {
    getArticle(this.props.match.params.id).then(res=>{
      this.setState({
        article: res.data.article
      })
     let dom =  this.parseDom(res.data.article.content)
     document.getElementById('content').appendChild(dom)
     document.title = res.data.article.title
     console.log(dom)
    })
  }
  show(event) {
    if (event.target.tagName === "IMG") {
      var image = new Image();
      image.src = event.target.src;
      // var galley = document.getElementById('content');
      var viewer = new Viewer(image, {
        movable: false,
        zoomable: false,
        title: false,
        navbar: false,
        hidden: function () {
          viewer.destroy();
        }
      });
      viewer.show();
    }
  }
  render() {
    return (
      <div className="section is-body is-mobile">
        <div className="container">
          <div className="article-container has-background-white">
            <h1 className="subtitle is-2">{this.state.article!==null?this.state.article.title:''}</h1>
            <div className="media-content">
              <p>{this.state.article!==null?this.state.article.createTime:''}</p>
            </div>
            <div
              id="content"
              className="markdown-body"
              // dangerouslySetInnerHTML={{
              //   __html: this.state.article!==null?this.state.article.content:''
              // }}
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
