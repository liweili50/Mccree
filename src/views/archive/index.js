import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getArchiveList } from '../../api/post'
import "./index.css";


function ListItems(props) {
  console.log(props)
  const listItems = props.list.map((item) =>
   <li key={item._id} to={"article/" + item._id}>
      <Link to={"article/" + item._id}>
      <span className="icon">
        <i
          className="czs-square-o"
          aria-hidden="true"
        />
      </span>
      <span><span className="time">2018年10月</span>{item.createTime}</span>
    </Link>
   </li>

  );
  // 正确！这里不需要指定 key：
  return listItems
}

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }
  componentDidMount() {
    this.handleLoadData()
  }
  handleLoadData() {
    getArchiveList().then(res => {
      console.log(res)
      this.setState({
        list: res.data
      })
    })
  }
  render() {
    const archiveItems = this.state.list.map((archive) =>
      <li key={archive._id}>
        <h5 className="is-size-4">{archive._id}</h5>
        <ul className="archive-list">
          <ListItems list={archive.list} />
        </ul>
      </li>
    );
    return (
      <div className="section is-body is-mobile">
        <div className="container has-background-white">
          <ul className="archive-content">
            {archiveItems}
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
