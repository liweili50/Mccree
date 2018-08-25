import React, { Component } from 'react';
import './index.css';

class Home extends Component {
  render() {
    return (
      <div>
        <h1 className="title">
          我收藏的一些网站
        </h1>
        <p className="subtitle">
          My first website with <strong>Bulma</strong>!
        </p>
      </div>
    );
  }
}

export default Home;