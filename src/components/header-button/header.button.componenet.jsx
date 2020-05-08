import React from "react";
import { Link } from "react-router-dom";
import "./header.button.componenet.scss";

const HeaderButton = ({ link, label, module, icon, current }) => (
  
  <div>
    <Link className={module} to={link}>
    <i className={icon}></i> {current} {label.toUpperCase()}
    </Link>
  </div>
);

export default HeaderButton;
