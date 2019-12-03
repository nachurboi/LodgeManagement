import React, { Component } from 'react'
import {Link} from 'react-router-dom'

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
  //  componentWillMount(){
  //    const token = window.localStorage.getItem("token")
  //    this.setState({token:token})
     
  //  }
 render() {
  const token = window.localStorage.getItem("token")
  
  if(token){
    return(
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-info" style={{fontFamily:'cursive'}}>
     <h3 className="navbar-brand text-white text-shadow grow" to="" style={{fontSize:'30px', fontFamily:'cursive'}}><Link to='/landingpage' className='text-white'>HOUSIFY</Link></h3>
     {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon" />
     </button> */}
     <div className="collapse navbar-collapse text-bold" id="navbarNav">
     </div>
     <div className='float-right'>
     <ul className='navbar-nav'>
     <li className="nav-item">
           <Link className="nav-link text-primary rounded text-bold grow bg-white m-2" to='/login' onClick={this.handleLogOut.bind(this)}>Log Out</Link>
         </li>
         {/* <li className="nav-item">
           <Link className="nav-link text-primary grow bg-white rounded m-2" to='/register'>Register</Link>
         </li> */}
     </ul>
     </div>
 
   </nav>
      </div>

    );
  }
  return (
   <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-info" style={{fontFamily:'cursive'}}>
        <h3 className="navbar-brand text-white text-shadow grow" to="" style={{fontSize:'30px', fontFamily:'cursive'}}><Link to='/landingpage' className='text-white'>HOUSIFY</Link></h3>
        {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button> */}
        <div className="collapse navbar-collapse text-bold" id="navbarNav">
        </div>
        <div className='float-right'>
        <ul className='navbar-nav'>
        <li className="nav-item">
              <Link className="nav-link text-primary rounded text-bold grow bg-white m-2" to='/login'>Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-primary grow bg-white rounded m-2" to='/register'>Register</Link>
            </li>
        </ul>
        </div>
    
      </nav>
   </div>

  );
 }
}

