import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Home from './views/home/home';

import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer'
class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        {/* <Route exact path="" component={Home} /> */}
        <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
