import React, { Component } from 'react';

class BankItem extends Component {
  render() {
  //  console.log("i am here " +this.props.bank.name);
    return (
      <li className="BankItem">
          <strong> {this.props.bank.name} </strong> - <i> {this.props.bank.type} </i> - <i>{this.props.bank.location} </i>
      </li>
    );
  }
}

export default BankItem;
