import React, { Component } from "react";
import "./Nav.css";
import { connect } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <span className="profile_img" />
        <Link to="/" onClick={() => axios.post("/api/auth/logout")}>
          Logout
        </Link>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    user: state.userReducer.user
  };
}
export default connect(mapStateToProps)(Nav);
