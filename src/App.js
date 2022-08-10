import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Header from "./Components/Headers/Header";
import Navigation from "./Components/Navigations/Navigation";
import Displaysearchitem from "./Components/Item_Section/Displaysearchitem";
import Footer from "./Components/Footers/Footer";
import { ProductCart } from "./Components/cart/cart";

export default class App extends Component {
  state = {
    data: [],
    displayCart: false,
    cart: {},
  };

  componentDidMount() {
    axios.get("./data.json").then((res) => {
      this.setState({ data: res.data });
    });
  }
  searchhandler = (e) => {
    // console.log(e.target.value)
  };

  // fetchdata = ()=>{
  //   return this.state.data;
  // }

  // Currently using the product in memory object so state is lost on reload
  //  We can store the state in local storgae to persist

  toogleFavorite = (SKU) => {
    console.log(SKU, this.state.data);
    if (this.state && this.state.data) {
      const final = this.state.data.map((product) => {
        if (product.sku === SKU) {
          product.isFav = !product.isFav;
        }
        return product;
      });
      this.setState({ data: final });
    }
  };
  tooglecart = (arg) => {
    this.setState({ displayCart: arg });
  };

  addtoCart = (product, quantity) => {
    this.setState({ cart: { count: 0, product } });
  };

  increseQuantity = (product) => {
    if (this.state.cart.hasOwnProperty(product.sku)) {
      this.setState({
        cart: {
          ...this.state.cart,
          ...this._constructCartObject(
            product,
            this.state.cart[product.sku].count + 1
          ),
        },
      });
    } else
      this.setState({
        cart: { ...this.state.cart, ...this._constructCartObject(product, 1) },
      });
  };

  _constructCartObject = (product, quantitiy) => {
    return { [product.sku]: { count: quantitiy, data: { ...product } } };
  };
  decreaseQuantity = (product) => {
    if (this.state.cart.hasOwnProperty(product.sku)) {
      let quantity = this.state.cart[product.sku].count - 1;
      if (+quantity === 0) {
        let newCart = { ...this.state.cart };
        delete newCart[product.sku];
        this.setState({
          cart: { ...newCart },
        });
      } else
        this.setState({
          cart: {
            ...this.state.cart,
            ...this._constructCartObject(
              product,
              this.state.cart[product.sku].count - 1
            ),
          },
        });
    }
  };
  removeFromCart = (product) => {
    if (this.state.cart.hasOwnProperty(product.sku)) {
      let newCart = { ...this.state.cart };
      delete newCart[product.sku];
      this.setState({
        cart: { ...newCart },
      });
    }
  };

  datadisplay = () => {
    return this.state.data;
  };

  render() {
    return (
      <div className="App">
        <Header
          cart={this.state.cart}
          search={this.searchhandler}
          tooglecart={this.tooglecart}
        />
        <Navigation />
        <Displaysearchitem
          data={this.state.data}
          tooggleFav={this.toogleFavorite}
          increseQuantity={this.increseQuantity}
          decreaseQuantity={this.decreaseQuantity}
          cart={this.state.cart}
        />
        <ProductCart
          display={this.state.displayCart}
          cart={this.state.cart}
          removeFromCart={this.removeFromCart}
          addtoCart={this.addtoCart}
          tooglecart={this.tooglecart}
          toogleFavorite={this.toogleFavorite}
        />
        <Footer />
      </div>
    );
  }
}
