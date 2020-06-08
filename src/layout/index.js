import React, { Component } from "react";
import {
  //   BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
// import DocumentTitle from "react-document-title";

import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Suspension from "../components/suspension/index";

import Home from "../views/home/home";
import Archive from "../views/archive/index";
import Login from "../views/login/index";
import Article from "../views/article/index";
import Feedback from "../views/feedback/index";
import Tags from "../views/tags/index";
import Tag from "../views/tag/index";
import NoMatch from "../views/noMatch/index";
import About from "../views/about/index"

function CustomRoute({ component: Component, ...rest }) {
  // console.log(rest)
  document.title = rest.title || 'Logue'
  return (
      <Route
        {...rest}
        render={props =>
          (
            <Component {...props} />
          )
        }
      />
  );
}
function PrivateRoute(props) {
  return (
    <React.Fragment>
      <Navbar />
      <CustomRoute
        {...props}
      />
      <Suspension />
      <Footer />
    </React.Fragment>
  );
}
class PrimaryLayout extends Component {
  // constructor(props) {
  //   super(props);
  //   props.history.listen((location) => { 
  //     console.log(location); 
  //   })
  // }
  render() {
    return (
      <Switch>
        <PrivateRoute exact path={["/", "/home", '/search']} title="首页" component={Home} />
        <PrivateRoute exact path="/archive" title="分类" component={Archive} />
        <PrivateRoute exact path="/about" title="关于" component={About} />
        <PrivateRoute exact path="/login" component={Login} />
        <PrivateRoute exact path="/post/:id" component={Article} />
        <PrivateRoute exact path="/Tags" title="标签" component={Tags} />
        <PrivateRoute exact path="/tags/:id" component={Tag} />
        <Route exact path="/feedback" title="反馈" component={Feedback} />
        <Route component={NoMatch} />
      </Switch>
    );
  }
}

export default withRouter(PrimaryLayout);
