import React, { Component } from "react";
import "./item_preview.css";
import EyeWish from "./Eye_Wish";
import AddRemoveItem from "./Add_Remove_Item";
import { getIcon } from "../../../Assets/image";
import { Link } from "react-router-dom";
import { currency } from "../../../Utility/Currencyhandle";

export default class ItemSearchPreviewGrid extends Component {
  heartclick = () => {
    // console.log("heartclick");
  };

  render() {
    // console.log(this.props)
    return (
      <>
        {this.props.data.map((res) => (
          <div className="itemview--grid" key={res.sku}>
            <div className="cont1">
              <div className="offer-indicator --visible">
                <span>50%</span>
              </div>
              <EyeWish
                product={res}
                eye={this.props.eye}
                toogleFavorite={this.props.toogleFavorite}
              />
              <Link to={`/product/${res.sku}`}>
              <div className="image-container">
                <img src={res.images.split("~")[0]} alt="imagepic" />
              </div></Link>
            </div>
            <div className="cont2">
            <Link to={`/product/${res.sku}`}><div className="name-container">{res?.name}</div></Link>
              <div className="item-detail-box">
                <div className="item-detail">
                  <div className="rating-container">{getIcon("star")} </div>
                  <div className="price-container">
                    <span className="current-price">{currency.format(res.price * 0.5)}</span>
                    <span className="original-price">{currency.format(res.price)}</span>
                  </div>
                </div>
                <div className="addtocart-icon">
                  {" "}
                  <AddRemoveItem product={res} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }
}
