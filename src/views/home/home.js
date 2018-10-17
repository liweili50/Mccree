import React, { Component } from 'react';
import './home.css';
import Article from '../../components/article/article'
import Card from '../../components/card/card'

class Home extends Component {
  render() {
    return (
      <div className="section is-body is-mobile">
        <div className="container">
          <div className="columns is-desktop">
            <div className="column">
              <Article />
              <Article />
            </div>
            <div className="column is-narrow is-narrow-fullhd">
              <Card />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;