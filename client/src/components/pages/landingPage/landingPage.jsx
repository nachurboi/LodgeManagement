import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../landingPage/landingPage.css'
import ContactCard from '../../contact-card/ContactCard'
export default class LandingPage extends Component {
 constructor(props, ...rest) {
  super(props, ...rest);
  this.state = {};
 }

 render() {
  return (
   <div className=" landing-container">
        <div className="container-fluid">
        <div className="col">
         <div className="col-xl-4 col-lg-4 pt-4">
          <ContactCard className=""/>
         </div>
        </div>
        </div>
   </div>
  );
 }
}



