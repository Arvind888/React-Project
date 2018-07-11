import React, { Component } from 'react';

class AddBank extends Component {

constructor(){
  super();
  this.state = {
    newBank :{}
  }
}

static defaultProps = {
   type : ['Direct banking' , 'Online Banking' , 'Phone banking']
}

handleSubmit(e){

 e.preventDefault();

   if( this.refs.title.value === ''){
     alert('Title is required!');
   }else {
      // console.log(this.refs.title.value)
      this.setState({
        newBank : {
          name : this.refs.title.value,
          type :this.refs.type.value,
          location : this.refs.location.value
        }}, function(){
        //  console.log(this.state)
          this.props.addBank(this.state.newBank)
      });
  }
}
  render () {
   let options =  this.props.type.map(type =>{
      return <option key= {type} name={type} value={type}>{type}</option>
    });
    return (
      <div>
        <h1>  Add Bank </h1>
        <form  onSubmit = {this.handleSubmit.bind(this)} >
          <div>
            <label>Title : </label> <br/>
            <input type="text" ref="title" />
          </div>
          <br/>
          <div>
            <label>Location: </label> <br/>
            <input type="text" ref="location"/>
          </div>
          <br/>
          <div>
            <label>Category: </label> <br/>
            <select ref="type">
                  {options}
            </select>
          </div>
          <br/>
          <div>
            <input type="submit" name="submit" />
          </div>
        </form>
      </div>
    );
  }
}

  export default AddBank;
