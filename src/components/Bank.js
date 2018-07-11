import React, { Component } from 'react';
import BankItem from './BankItem';


class Bank extends Component {
  render() {
  let bankItems;

  if(this.props.banks){
      bankItems = this.props.banks.map( bank => {
      //console.log(bank)
      return (
        <BankItem key = {bank.name} bank = {bank}/>
      );
    });
  }
    return (
      <div className="Bank">
            {bankItems}
      </div>
    );
  }
}

export default Bank;
