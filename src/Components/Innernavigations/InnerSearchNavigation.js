import React, { Component } from 'react'
import { getIcon } from '../../Assets/image';
import './InnerSearchNavigation.css';

export default class InnerSearchNavigation extends Component {
  render() {
    return (
      
        <div className='search_bar_result'>
          <div>
            <span>
            <p >Searching result<br/>
            "....." result found</p>
            </span>
            </div>

        <div className='innersort_table'>
          
          
          
            
            
        <div className='sortby'>
        <label>Sort By:</label>
         <select name="cars" id="cars">
         <option value="Search 1">Select...</option>
         <option value="Search 2">Date</option>
         <option value="Search 3">Type</option>
         <option value="Search 4">By Alphabetically</option>
         </select>
         </div>
         
         <div></div>
         <div className='viewbox'>
         <p> View: </p>

         <div><button className='tile'  >
          <div>
          {getIcon("gridicon")}
            
              
          
          </div>
         </button>
         
         </div>

         <div><button className='details'>
          
         {getIcon("tabicon")}
          
         </button>
         </div>
         </div>
         </div>
  
         </div>
    )
  }
}
