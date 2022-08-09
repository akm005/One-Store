import React, { Component } from 'react'
let minus = <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="injected-svg" data-src="/assets/images/icons/minus.svg" >
<path d="M2.75001 9C2.75001 8.44772 3.19772 8 3.75001 8H14.25C14.8023 8 15.25 8.44772 15.25 9C15.25 9.55228 14.8023 10 14.25 10H3.75001C3.19772 10 2.75001 9.55228 2.75001 9Z" fill="#E94560"></path>
</svg>
let plus = <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="injected-svg" data-src="/assets/images/icons/plus.svg">
<path d="M9 2.74999C9.55228 2.74999 10 3.19771 10 3.74999V14.25C10 14.8023 9.55228 15.25 9 15.25C8.44772 15.25 8 14.8023 8 14.25V3.74999C8 3.19771 8.44772 2.74999 9 2.74999Z" fill="rgb(233, 69, 96)"></path>
<path d="M2.75 9C2.75 8.44772 3.19772 8 3.75 8H14.25C14.8023 8 15.25 8.44772 15.25 9C15.25 9.55228 14.8023 10 14.25 10H3.75C3.19772 10 2.75 9.55228 2.75 9Z" fill="rgb(233, 69, 96)"></path>
</svg>

export default class AddItem extends Component {
  constructor(props){
    super(props)
    this.state = {
      cartitem:[],
      itemcounter:{
        itemId :"",
        value : 0
      } 
  };
  }
  itemcounterincrement = (e) =>{
    this.setState({itemcounter:{value:this.state.itemcounter.value + 1, itemId:e},
      cartitem: [...this.state.cartitem,2]
    });
      console.log(this.state.cartitem)
  }
  itemcounterdecrement = (e) =>{
    this.setState({itemcounter:{value:this.state.itemcounter.value - 1, itemId:e}});
  }
  render() {
    
    return (
      <>
      {(this.state.itemcounter.value > 0)?<>
      <button onClick={()=>this.itemcounterdecrement("")}><div className='iconbox'>{minus}</div></button>
      <div className='item-selected-count'><span>{this.state?.itemcounter.value}</span></div>
      </>:<></>}
        <button onClick={()=>this.itemcounterincrement("")}><div className='iconbox'>{plus}</div></button>
      </>
    )
  }
}
