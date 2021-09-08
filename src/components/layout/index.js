import React from "react";
import { Route } from "react-router-dom";
import DocumentTitle from "react-document-title";

import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import Suspension from "../suspension/index";

function PrimaryRoute(props) {
  return (
    <React.Fragment>
      <Navbar />
      <main className="is-body is-flex-grow-1 m-4">
        <div className="container is-max-desktop">
          <DocumentTitle title={props.title}>
            <Route {...props} />
          </DocumentTitle>
        </div>
      </main>
      <Suspension />
      <Footer />
    </React.Fragment>
  );
}

export default PrimaryRoute;
