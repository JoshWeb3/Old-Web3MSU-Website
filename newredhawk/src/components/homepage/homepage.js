import React from "react";
import kahoot from "../../assets/kahoot.png";
import "./homepage.css";
import redhawkInfo from "../tokenDescription/tokenDescription";
import redhawk from "../../assets/redhawktokennew.png";
import bitcoin from "../../assets/bitcoin.gif";
import metamask from "../../assets/metamasklogo.webp";
import ethspin from "../../assets/ethspin.gif";
import blockchain from "../../assets/blockchain.png";
import logo from "../../assets/logo.png";
import brain from "../../assets/901002.png";
import comp from "../../assets/computer.png";
import healthcare from "../../assets/healthcare.png";
import coding from "../../assets/coding.png";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import discord from "../../assets/disc.png";
import TokenDescription from "../tokenDescription/tokenDescription";
import Meeting1 from "../../assets/meeting1.jpg";

const Homepage = () => {
  // get a new date (locale machine date time)
  var date = new Date();
  // get the date as a string
  var n = date.toDateString();
  // get the time as a string
  var time = date.toLocaleTimeString();

  return (
    <div>
      <div className="donate">
        <div className="title">Web3 Association</div>
        <br />
        <img class="iconSmall" src={logo} />
        <br />
        <br />
        Site under construction...
        <br />
        <br />
        <br />
        We will be back soon!
      </div>
    </div>
  );
};

export default Homepage;
