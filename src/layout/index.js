import React, { Component } from "react";
import {
  //   BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Suspension from "../components/suspension/index";

import Home from "../views/home/home";
import Archive from "../views/archive/index";
import Login from "../views/login/index";
import Article from "../views/article/index";
import Feedback from "../views/feedback/index";
import Tag from "../views/tag/index";
const About = function() {
  return <h1>about me</h1>;
};
const NoMatch = function() {
  return <h1>404</h1>;
};

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <div className="app-container has-background-light">
    <Navbar />
    <Route
      {...rest}
      render={props =>
        (
          <Component {...props} />
        ) 
      }
    />
    <Suspension />
    <Footer />
  </div>
  );
}
class PrimaryLayout extends Component {
  render() {
    return (
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute exact path="/home" component={Home} />
        <PrivateRoute exact path="/archive" component={Archive} />
        <PrivateRoute exact path="/about" component={About} />
        <PrivateRoute exact path="/login" component={Login} />
        <PrivateRoute exact path="/article/:id" component={Article} />
        <PrivateRoute exact path="/tag/:id" component={Tag} />
        <Route exact path="/feedback" component={Feedback} />
        <Route component={NoMatch} />
      </Switch>
    );
  }
}

export default PrimaryLayout;
