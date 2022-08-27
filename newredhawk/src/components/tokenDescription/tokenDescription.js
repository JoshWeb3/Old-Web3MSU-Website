import React from "react";
import "./tokenDescription.css";
import redhawk from "../../assets/redhawktokennew.png";
import votingPower from "../../assets/votingpower.png";
import redhawkplus from "../../assets/redhawkplus.png";
import smartcontract from "../../assets/smartcontract.png";
import ballot from "../../assets/ballot.png";
import computer from "../../assets/computer.png";
import trophy from "../../assets/trophy.png";
import plane from "../../assets/plane.png";
import metamask from "../../assets/metamasklogo.webp";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

export const TokenDescription = () => {
  return (
    <div>
      <div class="donate">
        <div className="votingPower">What is Redhawk Token?</div>
        <br />
        <img src={redhawk} className="redhawk"></img>
        <br />
        Redhawk token is an ERC20 token that allows holders to participate in
        decisions on how the club is shaped in the future
        <br />
        <br />
        <img src={ballot} className="redhawkplus" />
        <h2>How does it work?</h2>
        Those who have Redhawk token in their wallet can vote on decisions via{" "}
        <a href="https://www.snapshot.org/">snapshot.org</a>.<br /> The amount
        of tokens would dictate voting power
        <br />
        (The more you have the more your vote counts)
        <br />
        <br />
        <br />
        <img class="votingPower" src={votingPower} />
        <br />
        <br />
        <br />
        <h2>How do I aquire Redhawk tokens?</h2>
        <b>Students can be awarded Redhawk Tokens by attending meetings,</b>
        participating in events, winning / participating in trivia games, and
        winning Hackathons
        <br />
        <br />
        <br />
        <img src={redhawkplus} className="redhawkplus" />
        <br />
        <br />
        <b>Anyone can get Redhawk Token by donating to us</b>
        <br />
        The amount of Redhawk ($MSU) tokens are minted in proportion to the
        dollar amount donated at the time
        <br />
        <h4>1 Dollar$ = 1 Redhawk Token</h4>
        <br />
        <img src={smartcontract} className="votingPower" />
        <br />
        For example:{" "}
        <em>
          If 50 Polygon(MATIC) was donated, and the price of Polygon(MATIC) at
          the time was $1.50 USD, then 75 Redhawk tokens would be minted to the
          donators wallet
          <br />
          OR if $50 was donated, then 50 Redhawk Tokens would be minted
        </em>
        <br />
        <br />
        <h2>How are donations being used?</h2>
        All crypto and cash donations would be deposited into the smart contract
        <br /> When withdrawn, it would be spent only on school club purposes,
        like equipment, supplies for events, and field trips to web3 events
        <br />
        <br />
        <img className="cryptoIcon" src={computer} />
        <img className="cryptoIcon" src={trophy} />
        <img className="cryptoIcon" src={plane} />
        <br />
        <br />
        <br />
        <Link className="noDeco" to="/Donate">
          <div className="donateUniversal">
            {" "}
            Donate
            <br />
          </div>
        </Link>
        <br />
        <Link className="noDeco" to="/app">
          <div className="donateUniversal">
            {" "}
            Enter dApp
            <br />
          </div>
        </Link>
        <br />
        <br />
        <br />
        <a href="https://polygonscan.com/token/0x66cddfeda103169489be7b398d96f475691ac11c">
          View on Polygon Blockchain Explorer
        </a>
      </div>

      <br />
    </div>
  );
};

export default TokenDescription;
