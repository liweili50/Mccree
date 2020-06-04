import React, { Component } from "react";
import { Link } from "react-router-dom";
import {getTagList} from '../../api/post'
import './index.css'

const TagList = function (props) {
  const tags = props.tags;
  const listItems = tags.map((tag) =>
  <Link to={'/tags/'+tag._id} key={tag._id} className="tag">{tag._id}</Link>
  );
  return (
    <React.Fragment>
     {listItems}
    </React.Fragment>
  );
}
class Tags extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: []
    };
    this.handleGetTagList = this.handleGetTagList.bind(this)
  }
  componentDidMount() {
    this.handleGetTagList()
  }
  handleGetTagList() {
    getTagList().then(res=>{
      console.log(res)
      this.setState({
        tags: res.data.result
      })
    })
  }
  render() {
    return (
      <div className="section is-body is-mobile">
        <div className="container">
          <div className="tags-container">
            <div className="tags-info">
              {/* <h3>全部标签</h3> */}
              <h4>目前共计 {this.state.tags.length} 个标签</h4>
            </div>
            <div className="tags are-medium">
             <TagList tags={this.state.tags} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tags;
