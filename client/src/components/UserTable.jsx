import React, { Component } from 'react'
import axios from 'axios';


export default class UserTable extends Component {
 constructor({id,firstname,lastname,email,number,password,photo,sn}) {
  super();
  this.state = {
     isLoading:false,
  };
  this.handleDel = this.handleDel.bind(this);
 }
 async handleDel(e){
  e.preventDefault();
  this.setState({isLoading:true})
   await axios.delete(`http://localhost:1000/del/user/${this.props.id}`)
   .then(res=>{
    this.setState({isLoading:false})
    this.props.history.push('/admindashboard')
   })
 }

 render() {
  return (
   <div>
    
     <table className="table border">
        <thead>
          <tr>
            <th scope="col">S/n</th>
            <th scope='col'>Identification</th>
            <th scope="col">Firstname</th>
            <th scope="col">Lastname</th>
            <th scope="col">Number</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{this.props.sn}</th>
            <td>{this.props.id}</td>
            <td>{this.props.firstname}</td>
            <td>{this.props.lastname}</td>
            <td>{this.props.number}</td>
            <td>{this.props.email}</td>
            <td><img src={this.props.photo}style={{ width:'30px',height:'30px'}}/></td>
          </tr>
        </tbody>
      </table>
     {this.state.isLoading?<div className='loader'></div>:<div className='btn btn-sm btn-danger text-white mt-0 mb-2'onClick={this.handleDel}>Delete User</div>}
  </div>
  );
 }
}

