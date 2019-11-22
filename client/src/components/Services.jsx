import React, { Component } from 'react'
import 'tachyons';
 
const Services = () =>{
  
 
 return(
 <div className='bg-info'>
  
      <div className = 'container mb-3 mt-3'>
      <div className='row m-2'>
      <h2 className='text-white text-center col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>Our Services</h2>
      </div>
         <div className ='row text-center pb-3 '> 
           <div className = 'col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4'>
           <div className="card text-center shadow-lg grow m-1 justify-content-center" style={{width: '18rem',height:'14rem'}}>       
           <div className="card-body">
           <div className='card-header text-white border border-dark'style={{fontFamily:'cursive'}}>Link-Ups</div>
             <p className="card-text text-white">We specialize in finding you reliabe  homes at your very convinience </p>
             <a href="#" className="btn btn-primary">Contact an Agent...</a>
           </div>
         </div>

           </div>
           <div className ='col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4'>
           <div className="card text-center shadow-lg grow m-1" style={{width: '18rem' ,height:'14rem'}}>
      
           <div className="card-body">
              <div className='card-header text-white border border-dark' style={{fontFamily:'cursive'}}>Valuers/Estate Mgt</div>
             <p className="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             <a href="#" className="btn btn-primary">Contact a Valuer...</a>
           </div>
         </div>

           </div>
           <div className = 'col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4'>
           <div className="card text-center shadow-lg grow m-1" style={{width: '18rem',height:'14rem'}}>
             
           <div className="card-body">
           <div className='card-header text-white  border border-dark' style={{fontFamily:'cursive'}}>Property Sales</div>
             <p className="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             <a href="#" className="btn btn-primary">Contact a Sales Agent...</a>
           </div>
         </div>

           </div>
         </div>
      </div>
   </div>
  );


 }

export default Services