import React, { Component } from "react";
import "./App.css";
import routes from "./routes";
import Provider from "./context/Provider";
import { withRouter } from "react-router";
import Nav from "./components/Nav/Nav";
import Auth from "./components/Auth/Auth";

class App extends Component {
  render() {
    const { location } = this.props;
    return (
      <Provider>
        <div className="App">
          {location.pathname === "/" ? (
            <Auth />
          ) : (
            <div className="App_main">
              <Nav />
              {routes}
            </div>
          )}
        </div>
      </Provider>
    );
  }
}

export default withRouter(App);
