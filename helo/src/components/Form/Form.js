import React, { Component } from "react";
import "./Form.css";
import Context from "../../context/Context";

class Form extends Component {
  state = {
    title: "",
    img: "",
    content: ""
  };
  submit() {}
  render() {
    return (
      <div className="Form">
        <Context.Consumer>
          {" "}
          {context => <React.Fragment />}From
        </Context.Consumer>
      </div>
    );
  }
}

export default Form;
