import React, { Component } from 'react'
import UserTable from './UserTable';
import axios from 'axios';

export default class UserTableList extends Component {
 constructor(props) {
  super(props);
  this.state = {
   alluser:[],
   message:'',
   isLoading:false
  };
 }
 

 componentDidMount(){

    axios.get('http://localhost:1000/alluser')
   .then(res=>{
    this.setState({alluser:res.data.info})
    this.setState({message:res.data.message})
   })
  
 
 }
 render() {
   const {alluser} = this.state
   
  return (
     <div>
       {!alluser ? <div>Users Loading...</div> : alluser.map((user,i)=>{
         const {_id,firstname,lastname,email,number,password,photo}= user;
         return <UserTable id={_id} firstname ={firstname} lastname={lastname} email={email}number={number} password={password} photo={photo} sn={i+1} />
       })}
     </div>
  );
 }
}


