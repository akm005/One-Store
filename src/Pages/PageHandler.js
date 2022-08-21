import React from 'react'
import { useParams } from 'react-router-dom'
import ItemSearchPreviewGrid from '../Components/Item_Section/Item_Preview/Item_search_preview_grid';


export default function PageHandler(props) {
  let {Id} = useParams();
  return (
<div>
  <ItemSearchPreviewGrid data={props.getProduct(Id)}/>
</div>
  )
}
