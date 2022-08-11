import React from 'react'
import {add,remove,trash} from '../../../Assets/svg'
import {useShoppingCart} from '../../../Context/SearchItemContext'

export default function AddRemoveItem(props) {
    const { getItemQuantity,
            increaseCartQuantity,
            decreaseCartQuantity,
            removeFromCart} = useShoppingCart()
    const {productId} = props
    // console.log(productId)
  return (
    <>
        <button onClick={() => increaseCartQuantity(productId)}>
          <div className="iconbox">{add}</div>
        </button>
        {getItemQuantity(productId) > 0 ? (
          <>
            <div className="item-selected-count">
            <span>{getItemQuantity(productId)}</span>
            </div>
            <button onClick={() => decreaseCartQuantity(productId)}>
              <div className="iconbox">{remove}</div>
            </button>
            <button onClick={() => removeFromCart(productId)}>
              <div className="iconbox">{trash}</div>
            </button>
          </>
        ) : (
          <></>
        )}
    </>
  )
}
