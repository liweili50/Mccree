import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import PrimaryRoute from "../components/layout";
import loadable from "@loadable/component";

const Home = loadable(() => import("../views/home"));
const Archive = loadable(() => import("../views/archive/index"));
const Post = loadable(() => import("../views/post/index"));
const Feedback = loadable(() => import("../views/feedback/index"));
const Tags = loadable(() => import("../views/tags/index"));
const Tag = loadable(() => import("../views/tag/index"));
const NoMatch = loadable(() => import("../views/noMatch/index"));
const About = loadable(() => import("../views/about/index"));

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
