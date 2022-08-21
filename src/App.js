import React, { Component } from "react";
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import axios from "axios";
import "./App.css";
import Header from "./Components/Headers/Header";
import Navigation from "./Components/Navigations/Navigation";
import Footer from "./Components/Footers/Footer";
import { ProductCart } from "./Components/cart/cart";
import {ShoppingCartProvider,ShoppingCartContext,} from "./Context/SearchItemContext";
import ItemZoomPreview from "./Components/Item_Section/Item_Preview/Item_Zoom_Preview";
import PageHandler from "./Pages/PageHandler";
import About from './Pages/About'
import Contact from './Pages/Contacts'
import Displaysearchitem from './Components/Item_Section/Displaysearchitem'

export default class App extends Component {
  static contextType = ShoppingCartContext;
  state = {
    data: [],
    displayCart: false,
    cart: {},
    displayeye:{isvisible:false,eyedata:[]}
  };
  
  componentDidMount() {
    axios.get("http://localhost:3000/data.json").then((res) => {
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
    // console.log(SKU, this.state.data);
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

  toogleeye = (eyedata) => {
    this.setState({displayeye:{isvisible:!this.state.displayeye.isvisible,eyedata:[eyedata]}});
  };

  _constructCartObject = (product, quantity) => {
    return { [product.sku]: { quantity: quantity, data: { ...product } } };
  };
  increseQuantity = (product) => {
    if (this.state.cart.hasOwnProperty(product.sku)) {
      this.setState({
        cart: {
          ...this.state.cart,
          ...this._constructCartObject(
            product,
            this.state.cart[product.sku].quantity + 1
          ),
        },
      });
    } else
      this.setState({
        cart: { ...this.state.cart, ...this._constructCartObject(product, 1) },
      });
  };

 
  decreaseQuantity = (product) => {
    if (this.state.cart.hasOwnProperty(product.sku)) {
      let quantity = this.state.cart[product.sku].quantity - 1;
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
              this.state.cart[product.sku].quantity - 1
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
  getProduct = (productId) =>{
    const findproduct = []
    this.state.data.forEach((product) => {
      if (product.sku === productId) {
        findproduct.push(product);
      }
    });
    // console.log(findproduct)
    return findproduct;
  }
  render() {
    return (
      <Router>
         <div className="App">
          <ShoppingCartProvider
          value={{
            cart: this.state.cart,
            search: this.searchhandler,
            tooglecart: this.tooglecart,
            data: this.state.data,
            
            increseQuantity: this.increseQuantity,
            decreaseQuantity: this.decreaseQuantity,
            display: this.state.displayCart,
            removeFromCart: this.removeFromCart, 
          }}
        >
          <Header/>
          <Navigation />
          <Routes>
                 <Route exact path='/' element={<Displaysearchitem 
            data={this.state.data}
            toogleFavorite= {this.toogleFavorite}
            eye={{eye:this.state.displayeye,
              toogleeye:this.toogleeye  
            }}
            />}></Route>
                 <Route exact path='/about' element={< About />}></Route>
                 <Route exact path='/contact' element={< Contact />}></Route>
                 <Route exact path='/product/:Id' element={<PageHandler getProduct={this.getProduct}/>}></Route>
          </Routes>
          <ProductCart/>
          <Footer />
          <ItemZoomPreview
            eye={{eye:this.state.displayeye,
              toogleeye:this.toogleeye}}  
            />
        </ShoppingCartProvider>
      </div>   
      </Router>
          
    );
  }
}