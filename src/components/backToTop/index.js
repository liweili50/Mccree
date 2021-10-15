import React, { Component } from "react";
import jump from "jump.js";

export default class BackToTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
    };
    this.getScroll = this.getScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  UNSAFE_componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  getScroll = (w, top) => {
    let ret = w[`page${top ? "Y" : "X"}Offset`];
    const method = `scroll${top ? "Top" : "Left"}`;
    if (typeof ret !== "number") {
      const d = w.document;
      // ie6,7,8 standard mode
      ret = d.documentElement[method];
      if (typeof ret !== "number") {
        // quirks mode
        ret = d.body[method];
      }
    }
    return ret;
  };
  handleScroll = () => {
    const showHeight = 400;
    this.setState({
      isShow: this.getScroll(window, true) > showHeight,
    });
  };

  scrollToTop(options) {
    jump(document.body, options);
  }

  render() {
    const { className, children, options, showHeight, ...props } = this.props;
    return this.state.isShow ? (
      <div
        {...props}
        className={`jump back-to-top ${className ? className : ""}`}
        onClick={() => this.scrollToTop(options)}
      >
        {children}
      </div>
    ) : null;
  }
}
