import React from "react";
import ethcomp from "../../assets/ethcompsmall.gif";
import redhawk from "../../assets/redhawktokennew.png";
import cat from "../../assets/cat.png";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

import "./projects.css";

const Project = () => {
  return (
    <>
      <div className="donate">
        <h1>Web3 Association Projects</h1>
        <br />
        <div className="hl"></div>
        <br />
        <br />
        <br />
        <h2>Redhawk ($MSU)</h2>
        <img src={redhawk} className="redhawk"></img>
        <br />
        Redhawk token is an ERC20 token that allows holders to participate in
        decisions on how the club is shaped in the future.
        <br />
        <br />
        <Link className="noDeco" to="/app">
          <div className="donateUniversal">Launch</div>
        </Link>
        <br />
        <Link className="noDeco" to="/redhawktoken">
          <div className="donateUniversal">Learn more</div>
        </Link>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="hl"></div>
        <br />
        <br />
        <br />
        <br />
        <h1>Pet Game</h1>
        (Work in Progress)
        <img src={cat} className="redhawk" />
        <br />
        A game where you can own your own virtual pet while also helping real
        animals.
        <br />
        <br />
        <a
          href="https://github.com/JoshWeb3/petContractWeb3MSU"
          className="noDeco"
        >
          <div className="donateUniversal">Github</div>
        </a>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="hl"></div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <img src={ethcomp} className="redhawk" />
        <br />
        more coming soon...
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
};

export default Project;
