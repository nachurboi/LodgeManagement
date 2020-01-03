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
    //  if(res.data.message){
    //   // this.props.history.push('/admindashboard')
    //   this.forceUpdate()
    //  }else{}

    this.setState({isLoading:false})
    })
    this.forceUpdate()
 }

 render() {
  return (
   <div>
    
     <table className="table border rounded bg-light">
        <thead>
          <tr>
            <th scope="col">S/N</th>
            <th scope='col'> <span className='bg-dark text-white  p-1 m-1'>ID</span></th>
            <th scope="col">Firstname</th>
            <th scope="col">Lastname</th>
            <th scope="col">Number</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody className=''>
          <tr>
            <th scope="row">{this.props.sn}</th>
            <td><span className='text-success'>{this.props.id}</span> </td>
            <td>{this.props.firstname}</td>
            <td>{this.props.lastname}</td>
            <td>{this.props.number}</td>
            <td>{this.props.email}</td>
            <td><img  className='rounded' src={this.props.photo}style={{ width:'30px',height:'30px'}} alt='img'/></td>
          </tr>
          {this.state.isLoading?<div className='loader'></div>:<div className='btn btn-sm btn-danger text-white  m-2 'onClick={this.handleDel}>Delete User</div>}
        </tbody>
      </table>
     {/* {this.state.isLoading?<div className='loader'></div>:<div className='btn btn-sm btn-danger text-white mb-2 ml-auto 'onClick={this.handleDel}>Delete User</div>} */}
  </div>
  );
 }
}

