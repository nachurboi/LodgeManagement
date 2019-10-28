import React, { Component } from 'react'
import {Link} from "react-router-dom"
import bgMyColor from "../header/header.css"

import "./header.css"
import LandingPage from '../../pages/landingPage/landingPage';


export default class Header extends Component {
 constructor(props, ...rest) {
  super(props, ...rest);
  this.state = {};
  
 }


 render() {
  return (
  <div>
    
    <nav className="navbar navbar-expand-sm navbar-light bg-info border-bottom border-dark">
       <Link className="navbar-brand text-white shadow-lg" to="/landingPage" style={{fontStyle:'sans-serif'}}>Get a Lodge</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active  text-white">
              <Link className="nav-link text-white" style={{fontStyle:'fantasy'}} to='/landingpage'>Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link  text-white" to="\contacts">Contacts</Link>
            </li>
            <li className="nav-item dropdown bg-info">
              <Link className="nav-link dropdown-toggle text-white" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                DashBoard
              </Link>
              <div className="dropdown-menu bg-info" aria-labelledby="navbarDropdown ">
                <Link className="dropdown-item text-dark " to="/login">Login</Link>
                <Link className="dropdown-item text-dark" to="/signup">Sign UP</Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link  text-white" to='/gallery'>Gallery</Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-dark bg-primary my-2 my-sm-0 text-white" type="submit">Search</button>
          </form>
        </div>
      </nav>
  </div>
  );
 }
}

Header.propTypes = {};
