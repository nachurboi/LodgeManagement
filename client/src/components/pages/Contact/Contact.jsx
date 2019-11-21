import React, { Component } from 'react'

const  Contact =({ contact }) =>{

  return (
    <div className='' style={{maxHeight:"500px"}}>
      <div className="card m-auto bg-info mt-5" style={{width: '18rem'}}>
         <div className="card-body ">
           <h2 className="card-title text-white border-bottom border-dark ">Contact</h2>
          <h5> name:{this.state.fisrtname + this.state.lastname} </h5>
          <h5> email:{this.state.email}</h5> 
           <h5>number:{this.state.number}</h5>
         </div>
       </div>
    </div>
   );
  
  }
export default  Contact;
