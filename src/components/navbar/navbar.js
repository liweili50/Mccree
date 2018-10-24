import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
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
      <div className="section is-header is-mobile has-background-white">
        <div className="container">
          <nav className="navbar">
            <div className="navbar-brand">
              <NavLink to="/home" className="navbar-item">
                <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
              </NavLink>
              <div className={`navbar-burger burger ${isCollapse ? 'is-active' : ''}`} onClick={this.handleClick} data-target="navbarExampleTransparentExample">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div id="navbarExampleTransparentExample" className={`navbar-menu  ${isCollapse ? 'is-active' : ''}`} >
              <div className="navbar-start">
                <NavLink to="/home" className="navbar-item" activeClassName="is-active">首页</NavLink>
                <NavLink to="/contact" className="navbar-item" activeClassName="is-active">分类</NavLink>
                <NavLink to="/marks" className="navbar-item" activeClassName="is-active">书签</NavLink>
                <NavLink to="/about" className="navbar-item" activeClassName="is-active">关于</NavLink>
              </div>
              <div className="navbar-end">
                <div className="navbar-item">
                  <div className="buttons">
                    <a className="button is-primary">
                      <strong>登录</strong>
                    </a>
                    <a className="button is-light">
                      注册
                    </a>
                  </div>
                </div>
                {/* <a className="navbar-item" rel="noopener noreferrer" target="_blank" href="https://www.zhihu.com/people/li-wei-Jonas/activities"><i className="czs-zhihu"></i></a> */}
                {/* <a className="navbar-item" rel="noopener noreferrer" target="_blank" href="https://github.com/liweili50"><i className="czs-github-logo"></i></a> */}
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navbar;
