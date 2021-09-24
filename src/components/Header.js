import React from "react";

import logo from "../styles/images/Amazon_logo.svg";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import LanguageIcon from "@material-ui/icons/Language";
import SearchIcon from "@material-ui/icons/Search";

import Navbar from "./Navbar";
import DeliveryLocation from "./DeliveryLocation";

function Header() {
  return (
    <>
      <div className="header">
        <div className="header__belt">
          <div className="header__left">
            <a href="/" className="header__logo">
              <img src={logo} alt="eCommerce amazon-colne logo" />
            </a>

            <div className="header__location">
              <DeliveryLocation />
            </div>
          </div>
          <div className="header__fill">
            <form className="header__search">
              <select
                name="search-category"
                id="search-category"
                className="header__search-select">
                <option>All Departements</option>
                <option>Books</option>
                <option>Cars</option>
                <option>Carsssssssssssssssssssssss</option>
              </select>
              <input
                id="header__search-input"
                type="text"
                className="header__search-input"
              />
              <button type="submit" className="header__search-btn">
                <SearchIcon style={{ fontSize: 30 }} />
              </button>
            </form>
          </div>
          <div className="header__nav">
            <div className="header__option header__lang">
              <LanguageIcon fontSize="small" />
            </div>
            <div className="header__option">
              <p>Hello</p>
              <h4>Account & Lists</h4>
            </div>
            <div className="header__option">
              <p>Returns</p>
              <h4>& Orders</h4>
            </div>
            <div className="header__option">
              <div className="cart">
                <ShoppingCartOutlinedIcon fontSize="large" />
                <span className="cart__count">0</span>
                <h3>Cart</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </>
  );
}

export default Header;
