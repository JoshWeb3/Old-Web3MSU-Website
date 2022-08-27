import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainNavigation from "./components/mainNavigation/mainNavigation";
import Donate from "../src/components/donate/donate";
import Homepage from "../src/components/homepage/homepage";
import Projects from "../src/components/projects/projects";
import Footer from "../src/components/footer/footer";
import wallpaper from "./assets/blockchain.jpg";

import { CashDonate } from "./components/donate/donate";
import { CryptoDonate } from "./components/donate/donate";
import { ETHDonation } from "./components/donate/donate";
import { BitcoinDonation } from "./components/donate/donate";
import { TokenDescription } from "./components/tokenDescription/tokenDescription";
import { SmartContractDonate } from "./components/donate/donate";
import { RedhawkStats } from "./components/donate/donate";
import { RedhawkSplash } from "./components/donate/donate";

import { Menu } from "./components/menu/menu";
import { Messenger } from "./components/messenger/messenger";

function App() {
  return (
    <div className="App">
      <Router>
        <MainNavigation />
        <br />
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
        <br />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
