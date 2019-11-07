import React from "react";
import "../App.css";
import homeIcon from '../assets/Sprint 1 Tuesday/homeIcon.png'

const FooterComponent = props => {
  return (
    <div>
      <footer className={"footer"}>
        <img className={"homeIcon"} src={homeIcon} alt=""/>
      </footer>
    </div>
  );
};

export default FooterComponent;
