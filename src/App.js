import React, { Component } from 'react';
import Bank from './components/Bank';
import AddBank from './components/AddBank'

import './App.css';

class App extends Component {

constructor() {
  super();
  this.state= {
    banks : []
  }
}

componentWillMount(){
   this.setState({
     banks : [
      {
        name : 'Chase Bank',
        location : 'Wheeling',
        type: 'Direct bank'
      },
      {
        name : 'Discover Bank',
        location : 'RiverWoods',
        type: 'Online Bank'
      },
      {
        name : 'DCU Bank',
        location : 'North larolina',
        type: 'Online Bank'
      }
     ]
   });
}

handleBank(newBank){
  console.log(newBank);
  let banks = this.state.banks;
  banks.push(newBank);
  //console.log(banks);
  this.setState({banks:banks})

}
  render() {
    return (
      <div className="App">
      <AddBank addBank = {this.handleBank.bind(this)}/>
      <br/>
       <h2>My Latest Banking Apps</h2>
      <Bank banks={this.state.banks}/>
      </div>

    );
  }
}

export default App;
