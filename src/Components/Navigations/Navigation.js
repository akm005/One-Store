import React, { Component } from 'react'
import './Navigation.css'

export default class Navigation extends Component {
  render() {
    return (
        <nav>
            <div className='navigation-cointainer'>
      <div className='nav-category-box'>
      <a href="#category">category</a>
      </div>
      <div className='nav-menu-box'>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#news">Home1</a></li>
        <li><a href="#contact">Home2</a></li>
        <li><a href="#about">Home3</a></li>
        <li><a href="#about">Home4</a></li>
        <li><a href="#about">Home5</a></li>
      </ul>
      </div>
      </div>
        </nav>
      
    )
  }
}
