import React, { Component } from 'react';
import './card.css';
import {getBackgroundImg} from '../../api/user'

class Card extends Component {
  constructor() {
    super()
    this.state={
      url: ''
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    window.open("http://www.bing.com")
  }
  componentDidMount() {
    getBackgroundImg().then(data=>{
      this.setState({
        url:'https://cn.bing.com/' +data.data.resultData.images[0].url
      })
    })
  }
  render() {
    return (
      <div className="card">
        <div onClick={this.handleClick} className="card-image">
          <figure className="image is-3by2">
            <img src={this.state.url} title="查看必应美图" alt="必应每日图片" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img src="https://avatars2.githubusercontent.com/u/19683924?s=460&v=4" alt="Placeholder" />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">Jonas</p>
              <p className="subtitle is-6"><i className="czs-location-l"></i>Shanghai China</p>
            </div>
          </div>

          <div className="content is-size-07">
            How could I try to explain <br />
            When I do,it turns away again <br />
            And it's always been the same <br />
            Same old story
          </div>
          <nav className="level is-mobile">
              <div className="level-left">
                <a className="level-item" rel="noopener noreferrer" target="_blank" href="https://github.com/liweili50" aria-label="reply">
                  <span className="icon has-text-dark">
                    <i title="github" className="czs-github-logo" aria-hidden="true"></i>
                  </span>
                </a>
                <a className="level-item" rel="noopener noreferrer" target="_blank" href="https://www.zhihu.com/people/li-wei-Jonas/activities" aria-label="retweet">
                  <span className="icon has-text-dark">
                    <i title="知乎" className="czs-zhihu fas fa-lg" aria-hidden="true"></i>
                  </span>
                </a>
                <a className="level-item" target="_blank" href="https://weibo.com/u/2529890461" rel="noopener noreferrer" aria-label="like">
                  <span className="icon has-text-dark">
                    <i title="微博" className="czs-weibo" aria-hidden="true"></i>
                  </span>
                </a>
                <a className="level-item has-text-dark" href="mailto:liweili50@163.com"  rel="noopener noreferrer" aria-label="like">
                  <span className="icon">
                    <i title="邮箱" className="czs-message-l" aria-hidden="true"></i>
                  </span>
                </a>
              </div>
            </nav>
        </div>
      </div>
    );
  }
}

export default Card;