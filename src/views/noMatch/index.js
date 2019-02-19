import React, { Component } from "react";
import "./index.css";
import { Link } from "react-router-dom";

class NoMatch extends Component {
  render() {
    return (
      <div className="no-match">
        <div className="no-match__content">
          <h1 className="has-text-primary">404</h1>
          <p className="has-text-grey-darker">
            It looks like you are lost...
          </p>
          <Link className="button is-primary is-rounded" to="/" >Go Home !</Link>
        </div>
      </div>
    );
  }
}

export default NoMatch;
