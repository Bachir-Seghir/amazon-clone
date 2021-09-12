import React, { useContext } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import "../styles/Navbar.css";
import { LocalStateContext } from "../contexts/sidebarState";

function Navbar() {
  const { setSideBarActive } = useContext(LocalStateContext);
  return (
    <div className="navbar">
      <div className="nav-left" onClick={() => setSideBarActive(true)}>
        <MenuIcon className="navbar__menu-icon" />
        <span>All</span>
      </div>
      <ul className="navbar__menu">
        <li>Today's Deals</li>
        <li>Sell</li>
        <li>Registry</li>
        <li>Gift Cards</li>
        <li>Buy Again</li>
      </ul>
      <div className="nav-right">
        <a href="/">Amazon's response to COVID-19</a>
      </div>
    </div>
  );
}

export default Navbar;
