import React from 'react';
import {Link} from 'react-router-dom'

const Header =()=>{
 return(
    <div> 
    <nav className="navbar navbar-expand-lg  bg-info " style={{fontFamily:'cursive'}}>
        <h3 className="navbar-brand text-white text-shadow grow" to="" style={{fontSize:'30px', fontFamily:'cursive'}}><Link to='/landingpage' className='text-white'>HOUSIFY</Link></h3>
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
export default Header;