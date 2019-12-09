import React, { Component } from 'react'
// import {Link} from 'react-router-dom'
import '../landingPage/landingPage.css'
import Contact from '../Contact/Contact'
import Vision from '../../../components/VisionCard'
import Services from '../../Services';
import Slider  from '../../Slider'
// import Example from '../../../Loaders/Example'





export default class LandingPage extends Component {
 constructor(props) {
  super(props);
  this.state = {
       vision: true,
  };
  this.handleVision = this.handleVision.bind(this)
} 
 handleVision = ()=>{ const {vision}= this.state; this.setState({vision:!vision})}
 

 render(){
    
  return (

   <div>
   {/* <div>{Example}</div> */}
        <div className='row landing-container overflow-hidden text-center'>
            <div className=' col-sm-4 col-md-4 col-lg-4 col-xl-4'>
               <button className='btn btn-info m-4 text-center btn-outline-primary text-white' onClick ={this.handleVision}>Contact Admin
               </button>

           {this.state.vision?<Vision/> : <Contact/>}

            </div>
            <div className='col-sm-8 col-md-8 col-lg-8 col-xl-8'>
            <Slider/>
            </div> 
           
        </div>
        <Services/>
   </div>
  );
 }
}
