import React, { Component } from "react";
import "./Displaysearchitem.css";
import ItemSearchPreviewGrid from "./Item_Preview/Item_search_preview_grid";
import { ShoppingCartContext } from "./../../Context/SearchItemContext";

export default class Displaysearchitem extends Component {
  static contextType = ShoppingCartContext;
  render() {
    let { cart, data, increseQuantity, decreaseQuantity, tooggleFav } =
      this.context;
    return (
      <div className="item-container">
        <div className="item-container-box">
          <div className="filter-box">
            <div className="filter-category"></div>
          </div>
          <div className="item-box">
            <div className="handle">
              <div className="item-element">
                <ItemSearchPreviewGrid
                  cart={cart}
                  data={data}
                  increseQuantity={increseQuantity}
                  decreaseQuantity={decreaseQuantity}
                  tooggleFav={tooggleFav}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
