import React, { Component } from "react";
import "./Auth.css";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { userInfo } from "../../ducks/userReducer";
import { connect } from "react-redux";
class Auth extends Component {
  state = {
    username: "",
    password: ""
  };
  login() {
    const { username, password } = this.state;
    const { userInfo, history } = this.props;
    axios.post("/api/auth/login", { username, password }).then(user => {
      userInfo(user.data);
      history.push("/dashboard");
    });
  }
  register() {
    const { username, password } = this.state;
    const { userInfo, history } = this.props;
    axios.post("/api/auth/register", { username, password }).then(user => {
      userInfo(user.data);
      history.push("/dashboard");
    });
  }
  render() {
    return (
      <div className="Auth">
        <div className="Auth_login-card">
          <h1 id="Auth_h1">Helo</h1>
          <div>
            Username:{" "}
            <input
              className="Auth_input"
              onChange={e => this.setState({ username: e.target.value })}
            />
          </div>
          <div>
            Password:{" "}
            <input
              className="Auth_input"
              onChange={e => this.setState({ password: e.target.value })}
            />
          </div>
          <div className="buttons">
            <button onClick={() => this.login()}>login</button>
            <button onClick={() => this.register()}>Register</button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.userReducer
  };
}
export default withRouter(
  connect(
    mapStateToProps,
    { userInfo }
  )(Auth)
);
