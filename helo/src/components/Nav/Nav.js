import React, { Component } from "react";
import "./Nav.css";
import { connect } from "react-redux";

const Nav = () => {
  return (
    <div className="Nav">
      {/* <img src={this.props.profile_pic} />
      <p>{this.props.username}</p> */}
      sth
    </div>
  );
};
function mapStateToProps(state) {
  return {
    user: state.userReducer.user
  };
}
export default connect(mapStateToProps)(Nav);
