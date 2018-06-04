import React, { Component } from "react";
import "./Post.css";
import { connect } from "react-redux";
class Post extends Component {
  state = {
    title: "",
    img: "",
    content: "",
    author: "",
    authorPicture: ""
  };
  getPostInfo() {}
  render() {
    const { post } = this.props;
    return (
      <div className="Post">
        <h1>{post.title}</h1>
        <p>-by {post.username}</p>
        {/* <img alt="profile_img" src={post.profile_pic}/> */}
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStatetoProps(state) {
  return {
    post: state.postReducer.post
  };
}
export default connect(mapStatetoProps)(Post);
