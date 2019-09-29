import React, { Component } from "react";
import checkbox from "../assets/checkbox.png";
import checked from "../assets/checked.png";
class Completed extends Component {
  state = {};
  render() {
    if (this.props.status === "true")
      return (
        <span>
          {" "}
          <img className="checkmark" src={checked} alt="checked" />
        </span>
      );
    else
      return (
        <span>
          <img className="checkmark" src={checkbox} alt="checkbox" />
        </span>
      );
  }
}

export default Completed;
