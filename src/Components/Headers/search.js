import React, { Component } from 'react'

export default class Search extends Component {
  render() {
    return (
      <input placeholder='Search here' onFocus={()=>{this.setState({isActive:true})}} onBlur={()=>{this.setState({isActive:false})}} onChange={this.props.search}></input>
    )
  }
}
