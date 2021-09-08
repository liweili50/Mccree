import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import PrimaryRoute from "../components/layout";

import Home from "../views/home";
import Archive from "../views/archive/index";
import Post from "../views/post/index";
import Feedback from "../views/feedback/index";
import Tags from "../views/tags/index";
import Tag from "../views/tag/index";
import NoMatch from "../views/noMatch/index";
import About from "../views/about/index";

class Routers extends Component {
  render() {
    return (
      <Switch>
        <PrimaryRoute
          exact
          path={["/", "/home", "/search"]}
          title="首页"
          component={Home}
        />
        <PrimaryRoute exact path="/archive" title="归档" component={Archive} />
        <PrimaryRoute exact path="/about" title="关于" component={About} />
        <PrimaryRoute exact path="/post/:id" component={Post} />
        <PrimaryRoute exact path="/tags" title="标签" component={Tags} />
        <PrimaryRoute exact path="/tag/:id" component={Tag} />
        <Route exact path="/feedback" component={Feedback} />
        <Route component={NoMatch} />
      </Switch>
    );
  }
}

export default withRouter(Routers);
