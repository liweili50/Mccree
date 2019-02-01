import React, { Component } from "react";
import { BackTop } from "antd";
import "./index.css";

class Suspension extends Component {
  render() {
    return (
      <div className="suspension-panel">
        <BackTop>
          <span className="icon has-text-primary">
            <i title="回到顶部" className="czs-angle-up-l" aria-hidden="true" />
          </span>
        </BackTop>
        <div className="btn">
          <span className="icon has-text-primary">
            <i title="建议反馈" className="czs-comment-l" aria-hidden="true" />
          </span>
        </div>
      </div>
    );
  }
}

export default Suspension;
