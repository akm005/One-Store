import React, { Component } from 'react';
import './Footer.css';
import logo from '../../Assets/logo.jpeg';

export default class Footer extends Component {
  render() {
    return (
        <footer>
            <div className='footer-container'>
              <div className='footer' >
                <div className='One-Store'>
                  <div><img src={logo} width="100px" height="50px" alt='logo'></img>
                  <p>The customer is very important,<br/>
                  the customer will be followed by the customer.<br/>
                  The author freed it and, in pregnancy.<br/>
                  Let there be no course in the house.<br/>
                  He was also educated as a care provider.</p>
                  </div>
                  </div>
                <div className='About'> <h2>About Us </h2>


                <div>Careers</div>
                <div>Our Stores</div>
                <div>Our Cares</div>
                <div>Terms And Condition</div>
                <div>Privacy Policy</div>
                  
                  </div>
                <div className='Customer'> <h2>Customer Care </h2>
                <div>Help Center</div>
                <div>How to Buy</div>
                <div>Track Your Order</div>
                <div>Corporate & Bulk Purchasing</div>
                <div>Returns & Refunds</div> </div>
                <div className='Contact'> <h2>Contact Us</h2>
                <div>70 Washington Square South, New York, NY 10012, United States
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