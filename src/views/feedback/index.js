import React, { Component } from "react";
import "./index.css";
class Feedback extends Component {
  render() {
    return (
      <div className="section is-body is-mobile">
        <div className="container">
          <div className="feedback-content">
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="您的名字"
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Problem</label>
              <div className="control">
                <textarea
                  className="textarea"
                  placeholder="有什么问题请给我留言"
                />
              </div>
            </div>

            <div className="control">
              <button className="button is-primary">Submit</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Feedback;
