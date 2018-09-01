import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './navbar.css';
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { isCollapse: false };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ isCollapse: !this.state.isCollapse });
  }
  render() {
    const isCollapse = this.state.isCollapse;
    return (
      <nav className="navbar is-transparent is-spaced">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="javscript:void(0)">
              <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
            </a>
            <div className= {`navbar-burger burger ${isCollapse ? 'is-active' : ''}`}   onClick={this.handleClick} data-target="navbarExampleTransparentExample">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div id="navbarExampleTransparentExample" className={`navbar-menu ${isCollapse ? 'is-active' : ''}`} >
            <div className="navbar-start">
              <Link to="/home" className="navbar-item">首页</Link>
              <Link to="/contact" className="navbar-item">分类</Link>
              <Link to="/contact" className="navbar-item">收藏夹</Link>
              <Link to="/home" className="navbar-item">关于</Link>
            </div>
            <div className="navbar-end">
              <Link to="/contact" className="navbar-item">W</Link>
              <Link to="/home" className="navbar-item">G</Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
