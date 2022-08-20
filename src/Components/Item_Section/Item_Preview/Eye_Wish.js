import React from 'react'
import {getIcon} from '../../../Assets/image'

export default function EyeWish(props) {
  // console.log(props.eye.toogleeye)
  return (
    <div className='look-wish'>
      <div>
        <div onClick={()=>props.eye.toogleeye(props.product)} className='eye-icon'>{getIcon("eye")}</div>
        <div className='heart-icon' onClick={()=>props.toogleFavorite(props.product.sku)}>{props.product.isFav? getIcon("heartFill"): getIcon("heart")}</div>
      </div>
    </div>
  )
}
