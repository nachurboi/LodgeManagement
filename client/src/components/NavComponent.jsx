import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import UserHeader from './layout/header/UserHeader'

export default class NavComponent extends Component {

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
  
  if(token){
    return(
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-info" style={{fontFamily:'cursive'}}>
     <h3 className="navbar-brand text-white text-shadow grow"style={{fontSize:'30px', fontFamily:'cursive'}}><Link to='/landingpage' className='text-white'>HOUSIFY</Link></h3>
     
     <div className="collapse navbar-collapse text-bold" id="navbarNav">
     </div>
     <div className='float-right'>
     <ul className='navbar-nav'>
     <li className="nav-item">
           <Link className="nav-link text-primary rounded text-bold grow bg-white m-2" to='/login' onClick={this.handleLogOut.bind(this)}>Log Out</Link>
         </li>
     </ul>
   
     </div>
    
   </nav>
      </div>

    );
  }
  return (
   <div>
    <UserHeader/>
   </div>

  );
 }
}

