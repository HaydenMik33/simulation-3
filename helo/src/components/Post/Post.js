import React, { Component } from "react";
import "./Post.css";

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
    return <div className="Post">post</div>;
  }
}

export default Post;
