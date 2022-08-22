import React, { Component } from "react";
import { getIcon } from "../../Assets/image";
import "./InnerSearchNavigation.css";

export default class InnerSearchNavigation extends Component {
  render() {
    return (
      <div className="search_bar_container">
        <div className="search-result">
          <span>Searching result</span>
          <span>"....." result found</span>
        </div>

        <div className="innersort_table">
          <div className="sortby-container">
            <label>Sort By: </label>
            <select className="select-sortby">
              <option hidden disabled="disabled">
                Select...
              </option>
              <option value="Relevance">Relevance</option>
              <option value="Date">Date</option>
              <option value="PriceLowtoHigh">Price Low to High</option>
              <option value="PriceHightoLow">Price High to Low</option>
            </select>
          </div>

          <div></div>
          <div className="viewby-container">
            <span> View: </span>

            <div>
              <button className="grid-button">
                <div>{getIcon("gridicon")}</div>
              </button>
            </div>
            <div>
              <button className="tab-button">{getIcon("tabicon")}</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
