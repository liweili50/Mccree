import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom'
import './navbar.css';
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { isCollapse: false, isInputShow: true, keyword: '' };
    this.handleCollapse = this.handleCollapse.bind(this);
    this.handleKeywordChange = this.handleKeywordChange.bind(this);
    this.search = this.search.bind(this);
    props.history.listen((location) => {
      if (location.pathname === '/search') {
        let value = new URLSearchParams(location.search).get('keyword')
        this.setState({ isInputShow: true, keyword: value });
      } else {
        this.setState({ keyword: '' });
      }
    })
  }
  search() {
    if (this.state.keyword === '') {
      this.setState({ isInputShow: !this.state.isInputShow });
    } else {
      // this.props.history.push({ pathname: "/t" });
      this.props.history.replace('/search?keyword=' + this.state.keyword);
    }
  }
  handleCollapse() {
    this.setState({ isCollapse: !this.state.isCollapse });
  }
  handleKeywordChange(event) {
    this.setState({ keyword: event.target.value });
  }
  handleEnterKey(e) {
    if (e.nativeEvent.keyCode === 13) {
      this.search()
    }
  }
  componentDidMount() {
    // if (this.props.location.pathname === '/search') {
    //   let value = new URLSearchParams(this.props.location.search).get('keyword')
    //   this.setState({ isInputShow: true, keyword: value });
    // } else {
    //   this.setState({ isInputShow: false, keyword: '' });
    // }
  }
  render() {
    const isCollapse = this.state.isCollapse;
    const isInputShow = this.state.isInputShow;
    return (
      <div className="section is-header is-mobile has-background-white">
        <div className="container">
          <nav className="navbar">
            <div className="navbar-brand">
              <NavLink to="/home" className="navbar-item">
                <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
              </NavLink>
              <div className={`navbar-burger burger ${isCollapse ? 'is-active' : ''}`} onClick={this.handleCollapse} data-target="navbarExampleTransparentExample">
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
                  <div className="control">
                    <input type="text" onKeyPress={this.handleEnterKey.bind(this)} className={`${isInputShow ? 'slideInRight' : 'slideInNone'}`} value={this.state.keyword} onChange={this.handleKeywordChange} placeholder="search..." />
                    <i onClick={this.search} className="czs-search-l"></i>
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

export default withRouter(Navbar);
