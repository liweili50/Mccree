import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="is-footer py-6 has-background-white">
        <div className="container is-max-desktop">
          <div className="content has-padding-left-20-mobile">
            <p>
              <strong>Logue</strong> by{" "}
              <a
                className="has-text-primary"
                href="https://github.com/liweili50"
              >
                Jonas
              </a>
              . &#169; {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
