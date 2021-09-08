import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container is-max-desktop">
          <div className="content">
          <p>
            <strong>Logue</strong> by <a href="https://github.com/liweili50">Jonas</a>. &#169; {new Date().getFullYear()}
          </p>
        </div>
        </div>
      </footer>
    );
  }
}

export default Footer;