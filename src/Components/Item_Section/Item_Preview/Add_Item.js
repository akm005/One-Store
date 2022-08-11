// import React, { Component } from "react";
// import {add,remove,trash} from '../../../Assets/svg'

// export default class AddItem extends Component {
//   render() {
//     let { cart, product, increseQuantity, decreaseQuantity } = this.props;
//     this.count = cart.hasOwnProperty(product.sku)
//       ? +cart[product.sku].count
//       : 0;
//     return (
//       <>
//         {this.count > 0 ? (
//           <>
//             <button onClick={() => decreaseQuantity(product)}>
//               <div className="iconbox">{remove}</div>
//             </button>
//             <div className="item-selected-count">
//               <span>{this.count}</span>
//             </div>
//           </>
//         ) : (
//           <></>
//         )}
//         <button onClick={() => increseQuantity(product)}>
//           <div className="iconbox">{add}</div>
//         </button>
//       </>
//     );
//   }
// }
