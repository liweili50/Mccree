import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {isCollapse: true};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({isCollapse: !this.state.isCollapse});
  }
  render() {
    const isCollapse = this.state.isCollapse;
    return (
      <nav className="navbar navbar-toggleable-md">
        <button onClick={this.handleClick} className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <i className="iconfont">&#xe7f4;</i>
        </button>
        <div className="container">
          <Link to="/" className="navbar-brand">React Website</Link>
          <div className={isCollapse ? 'collapse navbar-collapse' : 'navbar-collapse'} id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
