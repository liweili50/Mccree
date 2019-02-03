import React, { Component } from "react";

class Feedback extends Component {
  render() {
    return (
      <div className="section is-body is-mobile">
        <div className="container">
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="e.g Alex Smith"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <textarea
                className="textarea"
                placeholder="Explain how we can help you"
              />
            </div>
          </div>

          <div className="control">
            <button className="button is-primary">Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Feedback;
