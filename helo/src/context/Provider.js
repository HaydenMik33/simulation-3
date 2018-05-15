import React, { Component } from "react";
import Context from "./Context";

class Provider extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Context.Provider
        value={{
          state: this.state,

          test: () => {
            console.log("this works");
          }
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}
export default Provider;
