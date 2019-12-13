import React from 'react';
import './admindashboard.css'
// import LeftDrawer from './LeftDrawer'

const Admindashboard =()=>{ 
 return(
        <div>
          <div className=''>
           <div className='rounded-circle m-auto avatar' style={{width:'200px',height:'200px'}}></div>
           <div className='row bg-light'>
            <div className=' col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4'></div>
            <div className=' col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4'>
            <div className='card bg-light text-center text-white mt-5 mb-5 w-100'>
              <h4 className='text-info border-bottom'>Actions</h4>
              <button className='btn btn-primary mb-3 mt-3'>Delete an Apartment</button>
              <button className='btn btn-primary mb-3 mt-3'>Delete a User</button>
              <button className='btn btn-primary mb-3 mt-3'>View All Users</button>
              <button className='btn btn-primary mb-3 mt-3'>View available  Apartments</button> 
             </div>
            </div>
            <div className=' col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4'>
            </div>
           </div>
          </div>
       </div>
 );
}


export default Admindashboard;