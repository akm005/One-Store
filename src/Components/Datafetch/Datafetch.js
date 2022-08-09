import { Component } from 'react'
import axios from 'axios'

export default class Datafetch extends Component {
    state = {
        data:[],
    };

    componentDidMount(){
        axios.get("./data.json").then(res => {
            this.setState({data:res.data});
        });
    }
  render() {
    return (
      <div>
         {/* <ul>
          {this.state.data.map(data =><li key={data.sku}>{data.name}<br/></li>)}
        </ul> */}
      </div>
    )
  }
}
