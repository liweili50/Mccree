import React, { Component } from "react";
import { getBingDailyImage, getJonasEmotion } from "../../api/sundry";
import "./card.css";
import "balloon-css";

class Card extends Component {
  constructor() {
    super();
    this.state = {
      url: "",
      copyright: "",
      emotion: "",
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleGetJonasEmotion = this.handleGetJonasEmotion.bind(this);
    this.handleGetBingDailyImage = this.handleGetBingDailyImage.bind(this);
  }
  handleClick() {
    window.open("http://www.bing.com");
  }
  componentDidMount() {
    this.handleGetBingDailyImage();
    this.handleGetJonasEmotion();
  }
  handleGetJonasEmotion() {
    getJonasEmotion().then((res) => {
      this.setState({
        emotion: res.data.emotion,
      });
    });
  }
  handleGetBingDailyImage() {
    getBingDailyImage().then((res) => {
      let { url, copyright } = res.data;
      copyright = copyright.split("(")[0];
      this.setState({
        url,
        copyright,
      });
    });
  }
  render() {
    return (
      <div className="card">
        <div onClick={this.handleClick} className="card-image">
          <figure className="image is-3by2">
            <img
              src={this.state.url}
              title={this.state.copyright}
              alt="必应每日图片"
            />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img
                  src="https://avatars2.githubusercontent.com/u/19683924?s=460&v=4"
                  alt="Placeholder"
                />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">Jonas</p>
              <p className="subtitle is-6">
                <i className="czs-location-l"></i>Shanghai China
              </p>
            </div>
          </div>

          <div style={{ minWidth: 200 + "px" }} className="content is-size-07">
            {this.state.emotion.split(",").map((item, index) => (
              <React.Fragment key={index}>
                {item}
                <br />
              </React.Fragment>
            ))}
          </div>
          <nav className="level is-mobile">
            <div className="level-left">
              <a
                className="level-item"
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/liweili50"
                aria-label="Github 🎈"
                data-balloon-pos="up"
              >
                <span className="icon has-text-dark">
                  <i className="czs-github-logo" aria-hidden="true"></i>
                </span>
              </a>
              <a
                className="level-item"
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.zhihu.com/people/li-wei-Jonas/activities"
                aria-label="知乎"
                data-balloon-pos="up"
              >
                <span className="icon has-text-dark">
                  <i className="czs-zhihu fas fa-lg" aria-hidden="true"></i>
                </span>
              </a>
              <a
                className="level-item"
                target="_blank"
                href="https://weibo.com/liuyifeiofficial"
                rel="noopener noreferrer"
                aria-label="❤️"
                data-balloon-pos="up"
              >
                <span className="icon has-text-dark">
                  <i className="czs-weibo" aria-hidden="true"></i>
                </span>
              </a>
              <a
                className="level-item has-text-dark"
                href="mailto:liweili50@163.com"
                rel="noopener noreferrer"
                aria-label="Email Me"
                data-balloon-pos="up"
              >
                <span className="icon">
                  <i className="czs-message-l" aria-hidden="true"></i>
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
