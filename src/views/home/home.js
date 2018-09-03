import React, { Component } from 'react';
import './index.css';

class Home extends Component {
  render() {
    return (
      <main>
        <div className="container">
          <div className="notification">
            This container is <strong>centered</strong> on desktop.
          </div>
        </div>
      </main>
    );
  }
}

export default Home;