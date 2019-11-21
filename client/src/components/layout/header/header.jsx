import React, { Component } from 'react'
import {Link} from "react-router-dom"
import bgMyColor from "../header/header.css"
import NavComponent from '../../NavComponent'
import SearchBox from '../../SearchBox'

import "./header.css"
import LandingPage from '../../pages/landingPage/landingPage';


export default class Header extends Component {
 constructor(props) {
  super(props);
  this.state = {
    
  };
  
 }


 render() {
  return (
  <div className='sticky-top'>
      <div>
     <NavComponent/>
     <SearchBox/>
      </div>
  </div>
  );
 }
}


