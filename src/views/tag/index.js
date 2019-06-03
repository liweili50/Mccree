import React, { Component } from "react";
import "./index.css";
class Tag extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <div className="section is-body is-mobile">
        <div className="container">
          <div className="tag-content has-background-white">

            <h5 className="is-size-4">{this.props.match.params.id}</h5>
            <ul className="article-list">
              <li>
                <span className="icon">
                  <i
                    className="czs-square-o"
                    aria-hidden="true"
                  />
                </span>
                <span><span className="time">2018年10月</span>Linux编辑文档，习惯性的卡住了！</span>
              </li>
              <li>
                <span className="icon">
                  <i
                    className="czs-square-o"
                    aria-hidden="true"
                  />
                </span>
                <span><span className="time">2018年10月</span>Linux编辑文档，习惯性的卡住了！</span>
              </li>
              <li>
                <span className="icon">
                  <i
                    className="czs-square-o"
                    aria-hidden="true"
                  />
                </span>
                <span><span className="time">2018年10月</span>Linux编辑文档，习惯性的卡住了！</span>
              </li>
              <li>
                <span className="icon">
                  <i
                    className="czs-square-o"
                    aria-hidden="true"
                  />
                </span>
                <span><span className="time">2018年10月</span>Linux编辑文档，习惯性的卡住了！</span>
              </li>
              <li>
                <span className="icon">
                  <i
                    className="czs-square-o"
                    aria-hidden="true"
                  />
                </span>
                <span><span className="time">2018年10月</span>Linux编辑文档，习惯性的卡住了！</span>
              </li>

            </ul>

          </div>
        </div>
      </div>
    );
  }
}

export default Tag;
