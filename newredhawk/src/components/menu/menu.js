import React from "react";

import "./menu.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

export const Menu = () => {
  return (
    <div className="menu">
      <Link to="/" className="noDeco">
        <div className="menuItems">
          <h3>Home</h3>
        </div>
      </Link>

      <br />
      <Link to="/donate" className="noDeco">
        <div className="menuItems">
          <h3>Donate</h3>
        </div>
      </Link>
      <br />

      <br />
      <br />
    </div>
  );
};
