import React, { Component } from "react";
import DocumentTitle from "react-document-title";
// import { Pagination } from 'antd';
import "./index.css";

class Footer extends Component {
  render() {
    return (
      <DocumentTitle title="归档">
        <div className="section is-body is-mobile">
          <div className="container has-background-white">
            <ul className="archive-content">
              <li>
                <h5 className="is-size-4">2018</h5>
                <ul className="archive-list">
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
              </li>
              <li>
                <h5 className="is-size-4">2017</h5>
                <ul className="archive-list">
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
              </li>
              <li>
                <h5 className="is-size-4">2016</h5>
                <ul className="archive-list">
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
              </li>
            </ul>
            {/* <Pagination defaultCurrent={1} total={50} /> */}
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

export default Footer;
