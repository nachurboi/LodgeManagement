import React from 'react'
import './services.css'
import {Link} from 'react-router-dom'
 
const Services =()=>{
  return(
         <div>
            <div className='container'>
            <div className='row'>
                <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4'></div>
                <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4'>
                <h3 className='text-center m-3 text-info bolder'>SERVICES</h3>
                </div>
                <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4'></div>
              </div>
              <div className='row'>
              
                <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 text-center'>
                <div className='m-4'>
                <div className="bg-info rounded text-white grow">
                <img src="img/services/s1.png" alt="" />
                <h4>LINK UPs</h4>
                <hr className="hl" />
                <h5>Creating link ups between Agents and Customers</h5>
                <Link to="/services" className='btn btn-sm btn-primary m-4'>Learn More</Link>
              </div>
                </div>
                
                </div>
                <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 text-center'>
                  <div className='m-4'>
                  <div className="bg-info rounded text-white">
                <img src="img/services/s1.png" alt="" />
                <h4>PROPERTY ADVERT</h4>
                <hr className="hl" />
                <h5>Dont know to go about it?, Place your Advert with us..</h5>
                <a href="#" className="btn btn-sm btn-primary m-4">Learn More</a>
              </div>
                  </div>
                </div>
                <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 text-center'>
                  <div className='m-4'>
                  <div className="bg-info rounded text-white">
                <img src="img/services/s1.png" alt="" />
                <h4>MARKETING</h4>
                <hr className="hl" />
                <h5>Good Marketing makes the company look smart... Great Marketing makes the customer feel smart!</h5>
                <a href="#" className="btn btn-sm btn-primary m-4">Learn More</a>
              </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
  );
  


 }

export default Services