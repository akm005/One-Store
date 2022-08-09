import axios from 'axios'
import './App.css';
import Header from './Components/Headers/Header'
import Navigation from './Components/Navigations/Navigation';
import Displaysearchitem from './Components/Item_Section/Displaysearchitem';
import Footer from './Components/Footers/Footer';

import React, { Component } from 'react'

export default class App extends Component {
  state = {
    data:[],
};

componentDidMount(){
  axios.get("./data.json").then(res => {
      this.setState({data:res.data});
  });
}
  searchhandler = (e) =>{
    // console.log(e.target.value)
    }
  
  // fetchdata = ()=>{
  //   return this.state.data;
  // }  
datadisplay = () =>{
  return this.state.data
}

  render() {
    
    return (
      <div className="App">
      <Header search={this.searchhandler}/>
      <Navigation/>
      <Displaysearchitem data={this.state.data}  />
      {/* <ul>
          {this.state.data.map(data =><li key={data.sku}>{data.sku}*<br/></li>)}
        </ul> */}
      <Footer/>
    </div>
    )
  }
}