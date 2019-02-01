import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';



import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Suspension from './components/suspension/index';

import Home from './views/home/home';
import Archive from './views/archive/index';
import Login from './views/login/index';
import Article from './views/article/index';
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
            <Route exact path="/archive" component={Archive} />
            <Route exact path="/about" component={About} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/article/:id" component={Article} />
            <Route component={NoMatch} />
          </Switch>
          <Suspension />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
