import React, { Component } from "react";
import "./Dashboard.css";
import axios from "axios";
import { connect } from "react-redux";
// /dashboard
class Dashboard extends Component {
  state = {
    posts: [],
    search: "",
    userposts: true
  };
  getAllPosts(id) {
    axios.get(`/api/posts/${id}`);
  }
  componentDidMount() {}

  resetSearch() {}
  render() {
    const { posts } = this.state;
    const postsList = posts[0]
      ? posts.map((el, i) => {
          <div key={i}>
            <h1>{el.title}</h1>
            <p>{el.username}</p>
            <p>{el.profile_pic}</p>
          </div>;
        })
      : null;
    return (
      <div className="Dashb">
        <div className="Dashb_search">
          <form onSubmit={() => alert("submitted")}>
            <input type="text" placeholder="Search by title" />
            <input type="submit" value="Submit" />
          </form>
          <button>Reset</button>
          <input
            type="checkbox"
            name="My Posts"
            checked={this.state.userposts}
            onChange={() => this.setState({ userposts: !this.state.userposts })}
          />
        </div>
        <div className="Dashb_postDisplay">{postsList}</div>
      </div>
    );
  }
}
function mapStatetoProps(state) {
  return {
    user: state.userReducer.user
  };
}
export default connect(mapStatetoProps)(Dashboard);
