import React from 'react'
import './services.css';
 
const Services =()=>{
  return(
         <div>
            <div className='container bg-light text-center'>
            <div className='row'>
                <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4'></div>
                <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4'>
                <h3 className='text-center m-3 text-info bolder' style={{fontFamily:'cursive',fontSize:'bold'}}>SERVICES</h3>
                </div>
                <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4'></div>
              </div>
              <div className='row'>
                <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center'>
                <div className='m-4'>
                <div className="bg-info rounded text-white grow">
                <img src="img/services/s1.png" alt="" />
                <h4>LINK UPs</h4>
                <hr className="hl" />
                <p style={{fontSize:'20px'}}> Our job is pretty straight foward, Creating link ups between apartment Agents or oweners and students </p>
                {/* <Link to="/services" className='btn btn-sm btn-primary m-4'>Learn More</Link> */}
              </div>
                </div>
                
                </div>
      
                <div className='col-xs-12 col-sm-12 col-md-4 col-lg-6 col-xl-6 text-center'>
                  <div className='m-4'>
                  <div className="bg-info rounded text-white">
                <img src="img/services/s1.png" alt="" />
                <h4>PROPERTY ADVERT</h4>
                <hr className="hl" />
                <p style={{fontSize:'20px'}}>Dont know to go about it?, Place your Advert with us and make increasing profit year in year out..</p>
                {/* <a href="#" className="btn btn-sm btn-primary m-4">Learn More</a> */}
              </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
  );
  


 }

export default Services