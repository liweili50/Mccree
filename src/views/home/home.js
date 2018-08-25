import React, { Component } from 'react';
import './index.css';

class Home extends Component {
  render() {
    return (
      <div>
        <h1 className="title">
          Hello World
      </h1>
        <p className="subtitle">
          My first website with <strong>Bulma</strong>!
      </p>
      </div>
    );
  }
}

export default Home;