import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { message } from 'antd';
import './navbar.css';
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { isCollapse: false };
    this.handleClick = this.handleClick.bind(this);
    this.register = this.register.bind(this)
  }
  handleClick() {
    this.setState({ isCollapse: !this.state.isCollapse });
  }
  register() {
    message.info('暂未开放注册！敬请期待！');
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
                <NavLink to="/archive" className="navbar-item" activeClassName="is-active">归档</NavLink>
                <NavLink to="/tags" className="navbar-item" activeClassName="is-active">标签</NavLink>
                <NavLink to="/about" className="navbar-item" activeClassName="is-active">关于</NavLink>
              </div>
              <div className="navbar-end">
                <div className="navbar-item">
                  <div className="buttons">
                    <NavLink to="/login" className="button is-primary" activeClassName="is-active"><strong>登录</strong></NavLink>
                    <span onClick={this.register} className="button is-light">
                      注册
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navbar;
