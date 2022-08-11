import React from 'react'
import {eye,heart,heartFill} from '../../../Assets/svg'


export default function EyeWish(props) {
  return (
    <div className='look-wish'>
      <div>
        <div onFocus={()=>alert("item in focus")} className='eye-icon'>{eye}</div>
        <div className='heart-icon' onClick={()=>props.tooggleFav(props.product.sku)}>{props.product.isFav? heartFill: heart}</div>
      </div>
    </div>
  )
}
