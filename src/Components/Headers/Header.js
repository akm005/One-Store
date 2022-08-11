import React, { Component } from "react";
// import { SerchInputContainer } from "../../common/search-input/search-input";
// <SerchInputContainer/>
import "./Header.css";
import logo from "../../Assets/logo.jpeg";
import Search from "./search";
import Category from "./Category";
import { searchIcon, profileIcon, cartIcon } from "../../Assets/svg";

import {useShoppingCart} from '../../Context/SearchItemContext'
 const  Indicator = () => {
  const {cartQuantity} = useShoppingCart()
  return (
    <div className="cart-highlighter">
      {(cartQuantity>0)?cartQuantity:""}
    </div>
  )
}

export default class Header extends Component {

  constructor(props) {
    super(props);
    this.state = { isActive: false,
    };
  }
  render() {
    this.total = Object.keys(this.props.cart).length || 0;
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
                <Search search={this.props.search} />
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
                {/* <span> */}
                  {/* {this.total || 3} */}
                  {/* </span> */}
                  <Indicator/>
              </div>
              <div
                onClick={() => {
                  this.props.tooglecart(true);
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



