import React, { Component } from 'react';
import './Footer.css';
import logo from '../../Assets/logo.jpeg';
import { getIcon } from "../../Assets/image";

export default class Footer extends Component {
  render() {
    return (
        <footer>
            <div className='footer-container'>
              <div className='footer' > 
                <div className='Home'>
                  <div className='company-detail'><img src={logo} width="80px" height="40px" alt='logo'></img>
                  <div><span>© Copyright 2022 One Store. <br/>All rights reserved</span></div>
                  <div className='app-store-logo-here'>
                  
                  <button className='googlebutton'>
                  <div className='button_plan'><div>
                  {getIcon("googlelogo")}
                   </div>
                    <div className='button_box_googlestore' ><div className='get_it_on' >Get it on</div><div className='googleplay' >Google Play</div></div>
                   </div>
                  </button>
                  <button className='Apple-button'>
                    <div>
                    {getIcon("applelogo")}
                    </div>
                    <div className='Apple-icon'>
                      <div  className='download-on-the'>Download on the </div>
                      <div className='apple-store'>Apple Store</div>
                    </div>
                  </button>
                  
                  </div>
                  </div>
                  </div>
                <div className='About us' align="left"> <h2>About Us </h2>

                <ul>
                  <li> Careers </li> <br/>
                  <li> Our Stores </li><br/>
                  <li> Our Cares </li><br/>
                  <li> Terms And Condition </li><br/> 
                  <li> Privacy Policy </li> <br/>         
                  
                </ul>
                  
                  </div>
                <div className='Customer'  align="left"> <h2>Customer Care </h2>
                <ul>
                  <li>Help Center </li> <br/>
                  <li> How to Buy </li><br/>
                  <li> Track Your Order </li><br/>
                  <li> Corporate & Bulk Purchasing </li><br/> 
                  <li> Privacy Policy </li> <br/>         
                  
                </ul>
                 </div>
                <div className='Contact' align="left"> <h2>Contact Us</h2>
                <div>70 Washington Square South,<br/> New York, NY 10012,<br/> United States
                        <br/>Email: uilib.help@gmail.com
                        <br/>Phone: +1 1123 456 780
                        <br/>
                        </div> 
                        </div>
            </div>
            </div>

        </footer>
    )
  }
}