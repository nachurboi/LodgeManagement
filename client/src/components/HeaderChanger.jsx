import React, { Component } from 'react'
import UserHeader from './layout/header/UserHeader';
import AdminHeader from './layout/header/AdminHeader'
import Header from './layout/header/Header'

export default class HeaderChanger extends Component {

 constructor(props) {
  super(props);
  this.state = {
    token:''
  };
  
 }
 handleLogOut(){
   localStorage.clear()
 }
 render() {
  const token = window.localStorage.getItem("token")
  const mail = window.localStorage.getItem("email")
  
 if(token && mail ==='nachurboi@gmail.com'){
    return(
    <div>
      <AdminHeader handleLogOut={this.handleLogOut}/>
    </div>)
  }
  else if(token){
    return(
      <div>
      <UserHeader handleLogOut={this.handleLogOut} />
      </div>

    );
  }
   else{

  return (
   <div>
    <Header/>
   </div>
  
  );}
 }
}

