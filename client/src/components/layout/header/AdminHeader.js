import React from 'react';
import {Link}  from 'react-router-dom';
import  SearchBox from '../../SearchBox'
const AdminHeader = ({handleLogOut})=>{
 return(
  <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-info" style={{fontFamily:'cursive',minHeight:'100px'}}>
        <Link className="navbar-brand"  to="landingpage" style={{fontFamily:'cursive',fontSize:'30px'}}>HOUSIFY</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link btn btn-light text-info" to='/login' onClick={handleLogOut}>Log Out <span className="sr-only">(current)</span></Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <SearchBox/>
          </form>
        </div>
      </nav>
 </div>);
}

export default AdminHeader;