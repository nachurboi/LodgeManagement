import React, { Component } from 'react'
import 'tachyons';
 
const Services = () =>{
  
 
 return(
 <div className='bg-info'>
      <div className = 'container mb-3 mt-3'>
         <h2 className='text-center text-white'>Our Services</h2>
         <div className ='row text-center pb-3 align-content-center'> 
           <div className = 'col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4'>
           <div className="card text-center" style={{width: '18rem',height:'14rem'}}>       
           <div className="card-body">
           <div className='card-header text-white'style={{fontFamily:'cursive'}}>Link-Ups</div>
             <p className="card-text text-white">We specialize in finding you reliabe  homes at your very convinience </p>
             <a href="#" className="btn btn-primary">See more...</a>
           </div>
         </div>

           </div>
           <div className ='col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4'>
           <div className="card text-center" style={{width: '18rem' ,height:'14rem'}}>
      
           <div className="card-body">
              <div className='card-header text-white' style={{fontFamily:'cursive'}}>Valuers/Estate Mgt</div>
             <p className="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             <a href="#" className="btn btn-primary">See more...</a>
           </div>
         </div>

           </div>
           <div className = 'col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4'>
           <div className="card text-center" style={{width: '18rem',height:'14rem'}}>
         
           <div className="card-body">
           <div className='card-header text-white ' style={{fontFamily:'cursive'}}></div>
             <p className="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             <a href="#" className="btn btn-primary">See more...</a>
           </div>
         </div>

           </div>
         </div>
      </div>
   </div>
  );


 }

export default Services