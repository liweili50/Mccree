import React, { Component } from 'react';
import './index.css';

class Home extends Component {
  render() {
    return (
      <main className="main">
        <div className="container">
          <div className="columns">
            <div className="column is-8">
              <p className="bd-notification is-primary">
                main
              </p>
            </div>
            <div className="column">
              <p className="bd-notification is-primary">
                aside
              </p>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Home;