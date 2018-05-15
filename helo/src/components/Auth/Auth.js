import React, { Component } from "react";
import "./Auth.css";
import axios from "axios";
import { getUser } from "../../ducks/userReducer";
// "/"
class Auth extends Component {
  state = {
    username: "",
    password: ""
  };
  login() {
    ///if youget no user alert
  }
  register() {
    const { username, password } = this.state;
    axios.post("/api/auth/register", { username, password }).then(user => {
      console.log(user);
      ///getUser();
    });
    ///this.props.push('/dashboard')
  }
  render() {
    return (
      <div className="Auth">
        <div className="Auth_login-card">
          <h1 className="Auth_h1">Helo</h1>
          <div>
            Username:{" "}
            <input
              clasaName="Auth_input"
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
          <button className="Auth_button" onClick={() => this.login()}>
            login
          </button>
          <button className="Auth_button" onClick={() => this.register()}>
            Register
          </button>
        </div>
      </div>
    );
  }
}

export default Auth;
