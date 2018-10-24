import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';



import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';

import Home from './views/home/home';
const About = function () {
  return <h1>about me</h1>
}
const NoMatch = function () {
  return <h1>404</h1>
}
class App extends Component {
  render() {
    return (
      <Router>
        <div className="app-container has-background-light">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/contact" component={Home} />
            <Route exact path="/about" component={About} />
            <Route component={NoMatch} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
