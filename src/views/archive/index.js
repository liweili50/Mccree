import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="section is-body is-mobile">
        <div className="container">
          <aside className="menu">
            <ul className="menu-list">
              <li>
                <a className="is-active">Dashboard</a>
              </li>
              <li>
                <a>Customers</a>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    );
  }
}

export default Footer;
