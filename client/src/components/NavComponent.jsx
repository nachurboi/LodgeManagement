import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class NavComponent extends Component {

 constructor(props) {
  super(props);
  this.state = {
  };
  
 }
   
 render() {
  return (
   <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-info" style={{fontFamily:'cursive'}}>
        <h3 className="navbar-brand text-white text-shadow grow" href="#" style={{fontSize:'30px', fontFamily:'cursive'}}>HOUSIFY</h3>
        {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button> */}
        <div className="collapse navbar-collapse text-bold" id="navbarNav">
        </div>
        <div className='float-right'>
        <ul className='navbar-nav'>
        <li className="nav-item">
              <Link className="nav-link text-white text-bold grow" to='./login'>Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white grow" to='/register'>Register</Link>
            </li>
        </ul>
        </div>
    
      </nav>
   </div>

  );
 }
}

