import React from 'react';
import {Link} from 'react-router-dom';

const UserHeader = ({handleLogOut}) =>{
 return(
 <div>
  <nav className="navbar navbar-expand-lg navbar-light  bg-info" style={{fontFamily:'cursive'}}>
     <h3 className="navbar-brand text-shadow "style={{fontSize:'30px', fontFamily:'cursive'}}><Link to='/landingpage' className='text-white'>HOUSIFY</Link></h3>
     
     <div className="collapse navbar-collapse text-bold" id="navbarNav">
     </div>
     <div className='float-right'>
     <ul className='navbar-nav'>
     <li className="nav-item">
           <Link className="nav-link text-primary rounded text-bold grow bg-white m-2" to='/login' onClick={handleLogOut}>Log Out</Link>
         </li>
     </ul>
   
     </div>
    
   </nav> 
 </div>);
}
export default UserHeader;