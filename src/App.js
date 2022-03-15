import React from 'react';
import './App.css';
import handleSorter from './helper.js';

class App extends React.Component {
  constructor(props) {
    super(props);
     this.state = {
       data: []
     };

  }
  
  componentDidMount() {
    fetch('db.json')
    .then((response) => response.json())
    .then(jsondata => {
        this.setState({ data: jsondata });
    });  
  }

  sorter(data, value){
    const newset = handleSorter(data, value);
    this.setState({
      data: newset
    });
  }
  render(){
    return (
      <div className="App">
        <table>
          <thead>
          <tr>
            <th><button id="ticker" onClick={() => this.sorter(this.state.data, "ticker")}>TICKER</button></th>
            <th><button id="price" onClick={() => this.sorter(this.state.data, "price")}>PRICE</button></th>
            <th><button id="asset" onClick={() => this.sorter(this.state.data, "asset")}>ASSET CLASS</button></th>
          </tr>
          </thead>
          <tbody>
       {
         this.state.data && this.state.data.length>0 && this.state.data.map((item, i)=>{
           return (<tr key={`row-${i}`} className={item.assetClass}>
             <td>{item.ticker}</td>
             <td className={item.price > 0 ? "positive" : "negative"}>{item.price}</td>
             <td>{item.assetClass}</td>
           </tr>
           )
         })
       }
       </tbody>
       </table>
      </div>
    );  
  }
  }

export default App;
