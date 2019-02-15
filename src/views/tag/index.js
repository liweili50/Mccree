import React, { Component } from "react";

class Tag extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <div className="section is-body is-mobile">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-one-quarter-desktop" >
                <p className="is-size-5	 has-text-centered">{this.props.match.params.id}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tag;
