import React, { Component } from "react";
import "./Dashboard.css";
import axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getPost } from "../../ducks/postReducer";
// /dashboard
class Dashboard extends Component {
  state = {
    posts: [],
    search: "",
    userposts: true
  };

  getAllPosts() {
    const { search, userposts } = this.state;
    console.log(search, userposts);
    axios.post("/api/posts", { search, userposts }).then(res => {
      this.setState({ posts: res.data });
    });
  }
  componentDidMount() {
    this.getAllPosts();
  }
  componentDidUpdate(prevProps, prevState) {
    const { userposts } = this.state;
    if (prevState.userposts !== userposts) this.getAllPosts();
  }
  resetSearch() {}
  render() {
    console.log(this.state);
    const { posts } = this.state;
    const { getPost, history } = this.props;
    const postsList = posts.map((el, i) => {
      return (
        <div
          key={i}
          onClick={() => {
            getPost(el);
            history.push(`/post/${el.id}`);
          }}
        >
          <h1>{el.title}</h1>
          <p>{el.username}</p>
          {/* <img alt="profile_photo" src={el.profile_pic} />
          <img alt="posted_imaged" src={el.img} /> */}
        </div>
      );
    });

    return (
      <div className="Dashb">
        <div className="Dashb_search">
          <form onSubmit={() => this.getAllPosts()}>
            <input
              type="text"
              placeholder="Search by title"
              onChange={e => this.setState({ search: e.target.value })}
            />
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
        <footer>this is my footer</footer>
      </div>
    );
  }
}
function mapStatetoProps(state) {
  return {
    user: state.userReducer.user
  };
}
export default withRouter(
  connect(
    mapStatetoProps,
    { getPost }
  )(Dashboard)
);
