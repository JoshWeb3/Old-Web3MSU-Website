import React from "react";
import { useState } from "react";
import "./donate.css";
import TokenDescription from "../tokenDescription/tokenDescription";

import ethsymbol from "../../assets/ethsymbol.png";
import polygonsymbol from "../../assets/polygonsymbol.png";
import avalanchesymbol from "../../assets/avalanchesymbol.png";
import fantomsymbol from "../../assets/fantom.png";
import binancesymbol from "../../assets/binancesymbol.png";
import USDCsymbol from "../../assets/USDCsymbol.png";
import bitcoinsymbol from "../../assets/bitcoinsymbol.png";
import metamask from "../../assets/metamasklogo.webp";
import rock from "../../assets/rock.jpg";
import Meeting1 from "../../assets/meeting1.jpg";
import eth from "../../assets/eth.png";
import btc from "../../assets/btc.png";
import redhawk from "../../assets/redhawktokennew.png";
import polygonlogo from "../../assets/polygonlogo.png";
import blueflame from "../../assets/blueflame.gif";
import coinbase from "../../assets/coinbase.png";
import argent from "../../assets/argent.jpg";
import trust from "../../assets/trust.png";
import rainbow from "../../assets/rainbow.png";
import paypal from "../../assets/paypal.png";
import cashapp from "../../assets/cashapp.png";
import venmo from "../../assets/venmo.png";
import settings from "../../assets/settings.jpg";
import networkSelect from "../../assets/networkselect.png";
import addressbar from "../../assets/addressbar.jpg";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

import { ethers } from "ethers";

import { redhawkABI } from "./redhawkABI";
import { useEffect } from "react";

//const INFURA_ID = "6da8961f0fcc41ebb3c4ab8193470c2b";

export const CoinbaseInstructions = () => {
  return (
    <>
      <img class="cryptoIcon" src={coinbase}></img>
      <h2>Using a Coinbase wallet</h2>
      Available on iOS, Google Play, and all browsers that support extensions
      like Google Chrome
      <br />
      <br />
      <a href="https://www.coinbase.com/wallet">
        https://www.coinbase.com/wallet
      </a>
      <br />
      <br />
      <br />
      1. In <b>Settings</b>, under <b>'CONNECTIONS / DAPP BROWSER'</b> select{" "}
      <b>'Default Network'</b>
      <br />
      <img class="maxWidth" src={settings} />
      <br />
      <br />
      2. Choose <b>'Polygon'</b>
      <br />
      <img class="maxWidth" src={networkSelect} />
      <br />
      <br />
      3. Go to <b>'web3msu.org'</b>
      <br />
      <img className="maxWidth" src={addressbar} />
      <br />
      <br />
      <br />
      <br />
      <div className="hl"></div>
      <br />
      <h3>More Info:</h3>
      <br />
      <br />
      What is a Web3 / Wallet Browser?
      <br />
      <a href="https://thenextweb.com/news/web3-browser-opera-chrome-brave-analysis">
        https://thenextweb.com/news/web3-browser-opera-chrome-brave-analysis
      </a>
      <br />
    </>
  );
};

export const CashDonate = () => {
  function myFunction1() {
    /* Get the text field */
    var copyText = document.getElementById("myInput");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);

    /* Alert the copied text */
    alert("Copied the address: " + copyText.value);
  }
  return (
    <div className="donate">
      <h1>Cash Donations</h1>
      <br />
      <div className="votingStats">
        <h2>@Web3MSU</h2>
      </div>
      <br />
      <a class="noDeco" href="https://account.venmo.com/u/web3msu">
        <div className="venmo"> </div>
      </a>
      <br />
      <a class="noDeco" href="https://cash.app/$Web3MSU">
        <div className="cashapp">
          {" "}
          <br />
        </div>
      </a>
      <br />
      <a class="noDeco" href="https://www.paypal.com/paypalme/web3msu">
        <div className="paypal"> </div>
      </a>
      <br />
      <br />
      <br />
      <br />
      <b>
        Please confirm your donation on discord to receive Redhawk tokens 🐇
      </b>
      <br />
      <br />
      Thank You!
      <br />
      <br />
    </div>
  );
};

export const RedhawkSplash = () => {
  try {
    const redhawkAddr = "0x66cDdFEDa103169489bE7b398d96F475691aC11c";

    // A Web3Provider wraps a standard Web3 provider, which is
    // what MetaMask injects as window.ethereum into each page
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    // MetaMask requires requesting permission to connect users accounts
    provider.send("eth_requestAccounts", []);

    // The MetaMask plugin also allows signing transactions to
    // send ether and pay to change state within the blockchain.
    // For this, you need the account signer...
    const signer = provider.getSigner();
  } catch (err) {
    console.log(err);
  }

  return (
    <div>
      {" "}
      <div className="donate">
        <h1>Redhawk $MSU</h1>
        <img src={redhawk} class="redhawk" />
        <br />
        <br />
        <Link to="/crypto/app" className="noDeco">
          <div className="donateUniversal">Enter dApp</div>
        </Link>
        <br />
        <br />
        <b>Deployed on</b>
        <br />
        <img class="polygonlogo" src={polygonlogo} />
        <br />
      </div>
    </div>
  );
};

export const RedhawkStats = () => {
  const [donatedAMT, setDonatedAMT] = useState(1);

  const [price, setPrice] = useState(0);

  const [userBalance, setUserBalance] = useState(0);

  const [totalSupply, setTotalSupply] = useState(0);

  const [aProvider, setAProvider] = useState();

  const [userAddress, setUserAddress] = useState("");

  useEffect(() => {
    async function fetchPrice() {
      const redhawkAddr = "0x66cDdFEDa103169489bE7b398d96F475691aC11c";
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      setAProvider(provider);
      provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const redhawkContract = new ethers.Contract(
        redhawkAddr,
        redhawkABI,
        signer
      );
      let userAddress = await signer.getAddress();
      userAddress = userAddress.toString();

      const Supply = await redhawkContract.getTotalTokens();
      const MATICprice = await redhawkContract.getMATICPrice();
      const balance = await redhawkContract.getUserSupply();

      setPrice(MATICprice.toNumber() / 100);
      setTotalSupply(Supply.toNumber());
      setUserBalance(balance.toNumber());

      console.log(userAddress);
      console.log(balance.toNumber());
      setUserAddress(userAddress.toString());
    }

    fetchPrice();
  }, []);
  async function hasProvider() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    setAProvider(provider);
  }

  var rewards = (donatedAMT * price).toFixed(2);

  var votingPower = (userBalance / totalSupply) * 100;
  votingPower = votingPower.toFixed(2);

  console.log("total supply", totalSupply);
  console.log("user balance", userBalance);
  console.log("voting power", votingPower);

  let username = userAddress.slice(38, 64);

  return !aProvider ? (
    <div className="donate">
      <div>
        <h1>Redhawk $MSU</h1>
        <img src={redhawk} class="redhawk" />
        <br />
        <br />
        <div className="howTo">
          Please return in a wallet browser
          <br />
          to access our app
          <br />
          <br />
          <a href="https://www.coinbase.com/wallet">
            <img class="cryptoIcon" src={coinbase} alt="coinbase"></img>
          </a>
          <a href="https://metamask.io/">
            <img class="cryptoIcon" src={metamask} alt="polygon"></img>
          </a>
          <a href="https://trustwallet.com/">
            <img class="cryptoIcon" src={trust} alt="trust"></img>
          </a>
        </div>
        <br />
        <br />
        <b>deployed on</b>
        <br />
        <img src={polygonlogo}></img>
      </div>
      <br />
      <br />
      <div className="hl"></div>
      <br />
      What is a Web3 / Wallet Browser?
      <br />
      <a href="https://thenextweb.com/news/web3-browser-opera-chrome-brave-analysis">
        https://thenextweb.com/news/web3-browser-opera-chrome-brave-analysis
      </a>
      <br />
      <br />
      Wallets we like
      <br />
      Metamask <a href="https://metamask.io/">metamask.io</a>
      <br />
      Coinbase <a href="https://www.coinbase.com/wallet">coinbase.com/wallet</a>
      <br />
      Trust <a href="https://trustwallet.com/">trustwallet.com</a>
      <br />
      <br />
      <br />
    </div>
  ) : (
    <div className="donate">
      Signed in as: 0x..
      {username}
      <h1>Redhawk ($MSU) </h1>
      <img src={redhawk} class="redhawk" />
      <br />
      <div className="votingStats">
        <h3>
          Total Supply: {totalSupply} <br />
        </h3>
      </div>
      <br />
      <div class="votingStats">
        <br />
        <div className="votingPower">
          {votingPower} %
          <img
            class="iconSmaller
          "
            src={blueflame}
          ></img>
        </div>
        Your voting power
        <h3>Your balance : {userBalance} </h3>
        <br />
      </div>
      <br />
      <div className="votePropose">Vote </div>
      <div className="votePropose">Propose </div> <br />
      coming soon...
      <br />
      <br />
      <div className="hl"></div>
      <br />
      <br />
      <Link className="noDeco" to="/crypto/app/donate">
        <div className="donateUniversal">Donate MATIC</div>
      </Link>
      <br />
      <Link className="noDeco" to="/donate">
        <div className="donateUniversal">Donate Other</div>
      </Link>
      <br />
    </div>
  );
};

export const SmartContractDonate = () => {
  async function donate() {
    const redhawkAddr = "0x66cDdFEDa103169489bE7b398d96F475691aC11c";

    // A Web3Provider wraps a standard Web3 provider, which is
    // what MetaMask injects as window.ethereum into each page
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    // MetaMask requires requesting permission to connect users accounts
    await provider.send("eth_requestAccounts", []);

    // The MetaMask plugin also allows signing transactions to
    // send ether and pay to change state within the blockchain.
    // For this, you need the account signer...
    const signer = provider.getSigner();

    const redhawkContract = new ethers.Contract(
      redhawkAddr,
      redhawkABI,
      signer
    );

    const override = {
      value: ethers.utils.parseEther(`${donatedAMT}`),
    };

    console.log(donatedAMT);

    try {
      await redhawkContract.donate(override);
      window.alert("\nThank you for your donation!\n");
    } catch (err) {
      window.alert(
        "\n\n\nEither not enough MATIC in your wallet\nOR\nYou hit reject!\n\n\n"
      );
      console.log(err.message);
    }
  }

  const [donatedAMT, setDonatedAMT] = useState(1);
  const [userAddress, setUserAddress] = useState("");
  const [price, setPrice] = useState(0);

  const [userBalance, setUserBalance] = useState(0);

  const [totalSupply, setTotalSupply] = useState(0);

  const [aProvider, setAProvider] = useState();

  useEffect(() => {
    async function fetchPrice() {
      const redhawkAddr = "0x66cDdFEDa103169489bE7b398d96F475691aC11c";
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      setAProvider(provider);
      provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const redhawkContract = new ethers.Contract(
        redhawkAddr,
        redhawkABI,
        signer
      );

      let userAddress = await signer.getAddress();
      userAddress = userAddress.toString();

      setUserAddress(userAddress.toString());

      const Supply = await redhawkContract.getTotalTokens();
      const MATICprice = await redhawkContract.getMATICPrice();
      const balance = await redhawkContract.getUserSupply();

      setPrice(MATICprice.toNumber() / 100);
      setTotalSupply(Supply.toNumber());
      setUserBalance(balance.toNumber());

      console.log("does this work?", userAddress);
      console.log(balance.toNumber());
    }

    fetchPrice();
  }, []);

  async function hasProvider() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    setAProvider(provider);
  }

  var rewards = (donatedAMT * price).toFixed(2);
  var votingPower = (userBalance / totalSupply) * 100;
  votingPower = votingPower.toFixed(2);

  console.log("total supply", totalSupply);
  console.log("user balance", userBalance);
  console.log("voting power", votingPower);
  var username1 = userAddress.slice(38, 64);

  return !aProvider ? (
    <div className="donate">
      <div>
        <h1>Redhawk $MSU</h1>
        <img src={redhawk} class="redhawk" />
        <br />
        <div className="howTo">
          Please return in a wallet browser
          <br />
          to access our app
          <br />
          <br />
          <img class="cryptoIcon" src={metamask} alt="polygon"></img>
          <img class="cryptoIcon" src={coinbase} alt="coinbase"></img>
          <img class="cryptoIcon" src={argent} alt="argent"></img>
          <img class="cryptoIcon" src={trust} alt="trust"></img>
          <img class="cryptoIcon" src={rainbow} alt="rainbow"></img>
        </div>
        <br />
        <br />
        <b>deployed on</b>
        <br />
        <img class="polygon" src={polygonlogo}></img>
      </div>
    </div>
  ) : (
    <div className="donate">
      Signed in as: 0x..{username1}
      <h1>Redhawk $MSU</h1>
      <img src={redhawk} class="redhawk" />
      <b>
        <h2>1 MATIC = {price} MSU</h2>
      </b>
      <form>
        <h4>I want to donate</h4>
        <img class="polygon" src={polygonsymbol} />{" "}
        <input
          className="MATICenter"
          htmlFor="donatedAMT"
          min="1"
          type="number"
          placeholder="1"
          onChange={(e) => setDonatedAMT(e.target.value)}
        />{" "}
        <b>MATIC</b>
        <br />
        <br />
        and recieve
        <h2>{rewards} Redhawk Tokens</h2>
        <div className="donateButton" onClick={donate}>
          Donate
        </div>
        <br />
        <i> Redhawk Token will be sent to your wallet instantly</i>
        🐇
        <br />
        <br />
        <br />
        Thank You!
        <br />
        <br />
      </form>
      <br />
      <Link to="/crypto/app">
        {" "}
        <h3>← back</h3>
      </Link>
    </div>
  );
};

export const CryptoDonate = () => {
  async function donate() {
    const redhawkAddr = "0x66cDdFEDa103169489bE7b398d96F475691aC11c";

    // A Web3Provider wraps a standard Web3 provider, which is
    // what MetaMask injects as window.ethereum into each page
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    // MetaMask requires requesting permission to connect users accounts
    await provider.send("eth_requestAccounts", []);

    // The MetaMask plugin also allows signing transactions to
    // send ether and pay to change state within the blockchain.
    // For this, you need the account signer...
    const signer = provider.getSigner();

    const redhawkContract = new ethers.Contract(
      redhawkAddr,
      redhawkABI,
      signer
    );

    const override = {
      value: ethers.utils.parseEther(`${donatedAMT}`),
    };

    console.log(donatedAMT);

    try {
      await redhawkContract.donate(override);
      window.alert("\nThank you for your donation!\n");
    } catch (err) {
      window.alert(
        "\n\n\nEither not enough MATIC in your wallet\nOR\nYou hit reject!\n\n\n"
      );
      console.log(err.message);
    }
  }

  const [donatedAMT, setDonatedAMT] = useState(1);

  const [price, setPrice] = useState(0);

  useEffect(() => {
    async function fetchPrice() {
      const redhawkAddr = "0x66cDdFEDa103169489bE7b398d96F475691aC11c";
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const redhawkContract = new ethers.Contract(
        redhawkAddr,
        redhawkABI,
        signer
      );
      const MATICprice = await redhawkContract.getMATICPrice();
      setPrice(MATICprice.toNumber() / 100);
    }

    fetchPrice();
  }, []);

  var rewards = (donatedAMT * price).toFixed(2);

  return (
    <div className="donate">
      <h1>Cryptocurrency Donations </h1>
      <br />
      <h1>
        Option A
        <br />
      </h1>
      Send crypto donations to our wallets
      <br />
      <br />
      <div className="cryptoSelection">
        <div className="walletSelection">
          <Link className="noDeco" to="/crypto/eth">
            <div>
              <br />
              <div>ETHEREUM</div>
              <div>POLYGON</div>
              <div>AVALANCHE</div>
              <div>FANTOM</div>
              <div>BINANCE</div>
              <div className="cryptoSelection">
                <img class="cryptoIcon" src={ethsymbol} alt="eth"></img>
                <img class="cryptoIcon" src={polygonsymbol} alt="polygon"></img>
                <img
                  class="cryptoIcon"
                  src={avalanchesymbol}
                  alt="avalance"
                ></img>
                <img class="cryptoIcon" src={fantomsymbol} alt="fantom"></img>
                <img class="cryptoIcon" src={binancesymbol} alt="binance"></img>
              </div>

              <br />
            </div>
          </Link>
        </div>
        <div className="walletSelection">
          <Link className="noDeco" to="/crypto/btc">
            <div>
              <br />
              <br />
              <br />
              <div>BITCOIN</div>

              <br />
              <br />
              <img class="cryptoIcon" src={bitcoinsymbol} alt="eth"></img>
            </div>
          </Link>
        </div>
      </div>
      <br />
      <br />
      <i>
        {" "}
        Redhawk token will be sent to your wallet after confirmation by us in
        about 1-2 days{" "}
      </i>
      🐢
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="hl"></div>
      <br />
      <br />
      <h1>
        Option B <br />
      </h1>
      <b>
        <p>Donate MATIC using our App deployed on the Polygon Network</p>
      </b>
      <img class="cryptoIcon" src={polygonsymbol} alt="polygon"></img>
      <br />
      <br />
      <Link className="noDeco" to="/app">
        <div className="donateUniversal">Enter dApp</div>
      </Link>
      <br />
      <br />
      <br />
      <i>
        {" "}
        Redhawk Token will be magically sent to your wallet in less than 10
        seconds
      </i>
      🐇
      <br />
      <br />
    </div>
  );
};

export const BitcoinDonation = () => {
  function myFunction() {
    /* Get the text field */
    var copyText = document.getElementById("myInput");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);

    /* Alert the copied text */
    alert("Copied the address: " + copyText.value);
  }
  return (
    <div className="donate">
      <div>
        <h1>
          Web3 Association <br /> Bitcoin Wallet
        </h1>
        <img class="cryptoIcon" src={bitcoinsymbol} alt="bitcoin"></img>
        <br />
        <b>Please send Bitcoin to </b>
        <br />
        <br />
        <img src={btc} class="qrcode" />
        <br />
        <br />
        <input
          className="addressDisplay"
          type="label"
          value="bc1qyl0cv4fuxgh9graych3f3wjq9l0jl9vyt9tq49"
          id="myInput"
          onClick={myFunction}
        />
        <button className="copy" onClick={myFunction}>
          Copy
        </button>
      </div>
      <br />
      <b>
        Please confirm your donation on discord to receive Redhawk tokens 🐇
      </b>
      <br />
      <br />
      Thank you !
    </div>
  );
};

export const ETHDonation = () => {
  function myFunction() {
    /* Get the text field */
    var copyText = document.getElementById("myInput");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);

    /* Alert the copied text */
    alert("Copied the address: " + copyText.value);
  }
  return (
    <div className="donate">
      <div>
        <h1>
          Web3 Association <br />
          ETH Wallet
        </h1>
        <img class="cryptoIcon" src={ethsymbol} alt="eth"></img>
        <img class="cryptoIcon" src={polygonsymbol} alt="polygon"></img>
        <img class="cryptoIcon" src={avalanchesymbol} alt="avalance"></img>
        <img class="cryptoIcon" src={fantomsymbol} alt="fantom"></img>
        <img class="cryptoIcon" src={binancesymbol} alt="binance"></img>
        <img class="cryptoIcon" src={USDCsymbol} alt="USDC"></img>
        <br />
        <b>
          Please send Ethereum, Polygon, Avalanche, Fantom, Binance, Stablecoins
          and other tokens to{" "}
        </b>
        <br />
        <br />
        <img src={eth} class="qrcode" />
        <br />
        <br />
        <input
          className="addressDisplay"
          type="label"
          value="0xc7519106b280600CF5C4F31b6E62524FD9E41993"
          id="myInput"
          onClick={myFunction}
        />
        <button className="copy" onClick={myFunction}>
          Copy
        </button>
        <br />
        ENS coming soon
        <br />
        <br />
        <i>Redhawk token will be sent to your wallet within the day 🏃</i>
      </div>
      <br />
      Thank you!
      <br />
    </div>
  );
};

const Donate = () => {
  return (
    <div className="donate">
      <div className="votingPower">Fund us</div> <br /> <br />
      We are accepting donations in cash & cryptocurrency
      <br />
      <br />
      <div className="donationLinks">
        <Link className="howToButtons" to="/cash">
          <h1>
            {" "}
            Cash
            <br />$
          </h1>
        </Link>
        <Link className="howToButtons" to="/crypto">
          <h1>
            {" "}
            Crypto
            <br />₿
          </h1>
        </Link>
      </div>
      <br />
      <div>
        100% of donations go to educating students about Web3 <br />
        <br />
        Funds will be spent on:
        <br />
        equipment, learning resources, supplies for events, field trips, and
        more
      </div>
      <br />
      <br />
      <img class="kahoot" src={rock}></img>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Donate;
