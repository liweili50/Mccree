import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router
} from 'react-router-dom';

import PrimaryLayout  from './layout/index';

class App extends Component {
  render() {
    return (
      <Router onUpdate={() => window.scrollTo(0, 0)}>
        <PrimaryLayout />
      </Router>
    );
  }
}

export default App;
