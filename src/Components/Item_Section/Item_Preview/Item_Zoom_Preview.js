import React, { Component } from "react";
import { getIcon } from "../../../Assets/image";
import AddRemoveItem from './Add_Remove_Item'

export default class ItemZoomPreview extends Component {
  render() {
    const { eye, toogleeye } = this.props.eye;
    return (
      <div>
        {eye.isvisible ? (
          <div className="itemview-zoom-container">
            <div className="itemview-zoom-box">
              <div className="itemview-zoom">
                <div className="zoom-view">
                  {eye.eyedata.map((res) => (
                    <div className="z-box" key ={res}>
                      <div className="cont1-z">
                        <div className="offer-indicator --visible">
                          <span>50%</span>
                        </div>
                        {/* <EyeWish
                product={res}
                eye={this.props.eye}
                toogleFavorite={this.props.tooggleFav}
              /> */}
                        <div className="image-container">
                          <img src={res.images.split("~")[0]} alt="imagepic" />
                        </div>
                      </div>
                      <div className="cont2-z">
                        <div className="name-container">{res?.name}</div>
                        <div className="item-detail-box">
                          <div className="item-detail">
                            <div className="rating-container">
                              {getIcon("star")}{" "}
                            </div>
                            <div className="price-container">
                              <span className="current-price">
                                ${res.price * 0.5}
                              </span>
                              <span className="original-price">
                                ${res.price}
                              </span>
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
                  <div onClick={()=>toogleeye()} className="zoom-close">
                    <div>{getIcon("close")}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}
