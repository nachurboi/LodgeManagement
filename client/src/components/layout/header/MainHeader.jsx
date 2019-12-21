import React, { Component } from 'react';
import HeaderChanger from '../../HeaderChanger';

import "./header.css";


export default class MainHeader extends Component {
 constructor(props) {
  super(props);
  this.state = {
    
  };
  
 }

 render() {
  return (
  <div className='sticky-top'>
      <div>
     <HeaderChanger/>
      </div>
  </div>
  );
 }
}


