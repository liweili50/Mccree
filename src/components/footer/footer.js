import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          {/* <span className="text-muted">My Website &#169; {new Date().getFullYear()}</span> */}
          <div className="content">
          <p>
            <strong>Nebula</strong> by <a href="https://github.com/liweili50">Jonas</a>. &#169; {new Date().getFullYear()}
          </p>
        </div>
        </div>
      </footer>
    );
  }
}

export default Footer;