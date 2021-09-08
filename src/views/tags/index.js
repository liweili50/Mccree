import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getTagList } from "../../api/post";

const TagList = function (props) {
  const tags = props.tags;
  const listItems = tags.map((tag) => (
    <Link to={"/tag/" + tag._id} key={tag._id} className="tag mr-2">
      {tag._id}
    </Link>
  ));
  return <React.Fragment>{listItems}</React.Fragment>;
};
class Tags extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
    };
    this.handleGetTagList = this.handleGetTagList.bind(this);
  }
  componentDidMount() {
    this.handleGetTagList();
  }
  handleGetTagList() {
    getTagList().then((res) => {
      this.setState({
        tags: res.data,
      });
    });
  }
  render() {
    return (
      <div className="block p-5 has-background-white">
        <h4 className="title is-4 has-text-weight-normal	has-text-centered	">目前共计 {this.state.tags.length} 个标签</h4>
        <div className="tags are-medium">
          <TagList tags={this.state.tags} />
        </div>
      </div>
    );
  }
}

export default Tags;
