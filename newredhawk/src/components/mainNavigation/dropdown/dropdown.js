import React from "react";
import { useState } from "react";

export const NavButton = () => {
  [showMenu, setShowMenu] = useState(false);

  return <div className="navButton"></div>;
};

export const Dropdown = () => {
  return (
    <div className="dropdown">
      <h3>Home</h3>
      <h3>Projects</h3>
      <h3>Donate</h3>
    </div>
  );
};
