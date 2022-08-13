import React,{useContext} from 'react'
import {add,remove,trash} from '../../../Assets/svg'
import {useShoppingCart , ShoppingCartContext} from '../../../Context/SearchItemContext'


export default function AddRemoveItem({product}) {

  let context =  useContext(ShoppingCartContext)
  // console.log(product, "ctr")
    const { getItemQuantity,
      increseQuantity,
      decreaseQuantity,
      removeFromCart, cart } = context
      let quantity =  0
      if (cart.hasOwnProperty(product.sku)){
        quantity = cart[product.sku].quantity
      }
      
  return (
    <>
        <button onClick={() => increseQuantity(product)}>
          <div className="iconbox">{add}</div>
        </button>
        {quantity > 0 ? (
          <>
            <div className="item-selected-count">
            <span>{quantity}</span>
            </div>
            <button onClick={() => decreaseQuantity(product)}>
              <div className="iconbox">{remove}</div>
            </button>
            <button onClick={() => removeFromCart(product)}>
              <div className="iconbox">{trash}</div>
            </button>
          </>
        ) : (
          <></>
        )}
    </>
  )
}
