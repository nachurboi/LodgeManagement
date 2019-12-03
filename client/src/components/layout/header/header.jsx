import React, { Component } from 'react';
import NavComponent from '../../NavComponent'

import "./header.css";


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
      </div>
  </div>
  );
 }
}


