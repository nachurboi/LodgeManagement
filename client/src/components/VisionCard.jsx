import React, { Component } from 'react'

 const  VisionCard  =(props)=> {
 
  return (
   <div className='mt-5'>
     <div className="card m-auto bg-info grow " style={{width: '18rem'}}>
        <div className="card-body text-center">
          <h5 className="card-title text-white border-bottom border-dark ">MISSION</h5>
          <p className="card-text text-white">Our Mission Enable new and Confused Students to secure safe and reliable accomodations</p>
          <h5 className="card-title text-white  border-bottom border-dark">VISION</h5>
          <p className="card-text text-white">We believe that Through this invention with time locating safe and reliable accomodations stress would be reduced significantly</p>
        </div>
      </div>

   </div>
  );

}

export default VisionCard;

