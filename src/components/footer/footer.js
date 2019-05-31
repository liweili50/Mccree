import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          {/* <span className="text-muted">My Website &#169; {new Date().getFullYear()}</span> */}
          <div className="content">
          <p>
            <strong>Bulma</strong> by <a href="https://github.com/liweili50">Jonas</a>. The source code is licensed
            <a href="http://opensource.org/licenses/mit-license.php"> MIT</a>. &#169; {new Date().getFullYear()}
          </p>
        </div>
        </div>
      </footer>
    );
  }
}

export default Footer;