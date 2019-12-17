import React from 'react';
const ApartmentCard = ({allapartment})=>{
 return( 
   <div>
      {allapartment.map((user,i)=>{
        return(
          
         <div className="grow bg-info dib br3 ma2 text-center" style={{width: '18rem'}} key={i}>
     
        
          <img src={user.photo} className="card-img-top" width='200px' height='200px' alt="img" />
            <div className="card-body">
            <p className="text-white">City: {user.city}</p>
            <p className="text-white">Adress: {user.address}</p>
            <p className="text-white">Contacts: {user.phonenumber}</p>
            <p className='text-white text-center '>Apartment:{i}</p>
          </div>
     </div>
     
        );

        
      })
     
     }
   </div>    
    
 );
 
}
export default ApartmentCard;