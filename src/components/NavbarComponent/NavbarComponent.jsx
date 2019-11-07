import React from "react";
import logo from "./NavbarComponentImages/MYtineraryLogo.png";
import "./NavbarComponentStyle.css";


const NavbarComponent = props => {
  return (
    <div>
      <img className={"logo"} src={logo} alt="" />
    </div>
  );
};

export default NavbarComponent;