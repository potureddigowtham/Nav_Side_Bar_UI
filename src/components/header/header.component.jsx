import React from "react";

import HeaderButton from "../header-button/header.button.componenet";
import "./header.styles.scss";

const Header = () => (
  <div>
    <div className="headers">
    <div className="logo">
      <HeaderButton link="/" label="NAMER" module="option2" icon="" />
    </div>
      <HeaderButton link="/signin" label="signin" module="option1" icon=""/>
    </div>
  </div>
);

export default Header;
