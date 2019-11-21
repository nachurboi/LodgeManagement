import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../landingPage/landingPage.css'
import ContactCard from '../../contact-card/ContactCard'
import Vision from '../../../components/VisionCard'
import Slider from '../../../components/Slider'
import Services from '../../Services'




export default class LandingPage extends Component {
 constructor(props) {
  super(props);
  this.state = {};
 }

 render() {
  return (
   <div className=" ">
        <div className='row landing-container overflow-hidden'>
            <div className=' col-sm-4 col-md-4 col-lg-4 col-xl-4'>
                 <Vision/>
            </div>
            <div className='col-sm-8 col-md-8 col-lg-8 col-xl-8'>
            </div> 
           
        </div>
        <Services/>
   </div>
  );
 }
}



