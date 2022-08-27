import React from "react";
import { Link } from "react-router-dom";
import "./mainNavigation.css";
import logo from "../../assets/logo.png";
import polygonlogo from "../../assets/polygonlogo.png";

import "../menu/menu.css";

const MainNavigation = () => {
  return (
    <div>
      <div className="mainNavigation">
        {" "}
        <Link to="/menu" className="navlink">
          <div className="fontBigger">MENU</div>
        </Link>
        <Link to="/menu" className="navlink"></Link>
      </div>
    </div>
  );
};

export default MainNavigation;
