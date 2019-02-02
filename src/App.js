import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router
} from 'react-router-dom';

import PrimaryLayout  from './layout/index';

class App extends Component {
  render() {
    return (
      <Router>
        <PrimaryLayout />
      </Router>
    );
  }
}

export default App;
