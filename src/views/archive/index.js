import React, { Component } from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs"
import { getArchiveList } from "../../api/post";
import "./index.css";

function ListItems(props) {
  const listItems = props.list.map((item) => (
    <li key={item.id}>
      <span className="icon">
        <i className="czs-square-o" aria-hidden="true" />
      </span>
      <Link to={"post/" + item.id} className="has-text-link-dark">
        <span>
          <span className="time">{dayjs(item.createTime).format('YYYY-MM-DD')}</span>
          {item.title}
        </span>
      </Link>
    </li>
  ));
  return listItems;
}

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }
  componentDidMount() {
    this.handleLoadData();
  }
  handleLoadData() {
    getArchiveList().then((res) => {
      this.setState({
        list: res.data,
      });
    });
  }
  render() {
    const archiveItems = this.state.list.map((archive) => (
      <li key={archive._id}>
        <h5 className="is-size-4 has-text-weight-normal">{archive.category}年</h5>
        <ul className="archive-list">
          <ListItems list={archive.list} />
        </ul>
      </li>
    ));
    return <ul className="archive-content has-background-white">{archiveItems}</ul>;
  }
}

export default Footer;
