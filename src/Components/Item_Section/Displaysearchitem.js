import React, { Component } from 'react'
import './Displaysearchitem.css'
import ItemSearchPreviewGrid from './Item_Preview/Item_search_preview_grid'

export default class Displaysearchitem extends Component {
  
  render() {
    
    return (
      <div className='item-container'>
        <div className='item-container-box'>
        <div className='filter-box'>
            <div className='filter-category'></div>
        </div>
        <div className='item-box'>
            <div className='handle'>
              <div className='item-element'>
                <ItemSearchPreviewGrid data={this.props.data} />
              </div>
            </div>
            
        </div>
        </div>
      </div>
    )
  }
}
