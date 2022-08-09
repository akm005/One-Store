import React, { Component } from 'react'

export default class Category extends Component {
  render() {
    return (
    <select name="category-list" id="category-list">
        <option value="All Category">All Categories</option>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
    )
  }
}
