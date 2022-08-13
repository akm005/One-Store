import React, { Component } from "react";
// import { SerchInputContainer } from "../../common/search-input/search-input";
// <SerchInputContainer/>

import "./Header.css";
import logo from "../../Assets/logo.jpeg";
import Search from "./search";
import Category from "./Category";
import { searchIcon, profileIcon, cartIcon } from "../../Assets/svg";
// any function name with use at starting should not be used
// Only to be used by hooks that are to used in functional component
import { ShoppingCartContext } from "../../Context/SearchItemContext";

export default class Header extends Component {
  static contextType = ShoppingCartContext;
  constructor(props) {
    super(props);
    this.state = { isActive: false };
  }

  render() {
    // console.log(this.context, "contxt");
    let { cart, search, tooglecart } = this.context;
    this.total = Object.values(cart).reduce(
      (count, item) => item.count + count,
      0
    ) || "" ;
    console.log(this.total)
    return (
      <header>
        <div className="header-container" display="flex">
          {/* <div className="header-profile-container"> */}
          <div className="header-logo-box">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
          </div>
          <div className="header-search-container">
            <div className="search-box-container">
              <div className="search-icon-cointainer">
                <span className="search-icon">{searchIcon}</span>
              </div>
              <div className="search-box">
                <Search search={search} />
              </div>
              <div className="category-box">
                <Category />
              </div>
            </div>
          </div>
          <div className="header-profile-container">
            <button className="profile-icon-button">
              <div className="profile-pic-icon">{profileIcon}</div>
            </button>
            <button className="cart-icon-button">
              <div className="cart-item-indicator">
              <div className="cart-highlighter">{this.total}</div>
              </div>
              <div
                onClick={() => {
                  tooglecart(true);
                }}
                className="cart-pic-icon"
              >
                {cartIcon}
              </div>
            </button>
            {/* </div> */}
          </div>
        </div>
      </header>
    );
  }
}
