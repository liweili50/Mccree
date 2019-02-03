import React, { Component } from "react";

class Tag extends Component {
  constructor(props) {
    super(props);
    console.log(props)
  }
  render() { 
    return (
      <div className="section is-body is-mobile">
        <div className="container">
            <h5>产品</h5>
        </div>
      </div>
    );
  }
}

export default Tag;
