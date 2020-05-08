import React from "react";
import { withRouter } from "react-router-dom";

import HeaderButton from "../header-button/header.button.componenet";
import "./sidebar.styles.scss";

class SideBar extends React.Component {
  constructor() {
    super();

    this.state = [(this.path = "/")];
  }

  // printer = (event) => {
  //   const url = event.target;
  //   try {
  //     const n = url["href"].lastIndexOf("/");
  //   const data = url["href"].substring(n + 1).toUpperCase()
  //   let result = "";
  //   {
  //     data
  //       ? (result = data)
  //       : (result = "HOME");
  //   }
  //   this.setState([(this.path = result)]);
  //   }
  //   catch {
  //     this.setState([(this.path = "HOME")]);
  //   }
  // };

  render() {
    return (
      // <div className="sidebar" onClick={this.printer}>
      <div className="sidebar">
        <HeaderButton
          link="/"
          label="Home"
          module="option"
          icon="fas fa-home"
          // current={this.path}
        />
        <HeaderButton
          link="/shop"
          label="shop"
          module="option"
          icon="fas fa-shopping-cart"
          // current={this.path}
        />
      </div>
    );
  }
}

export default withRouter(SideBar);
