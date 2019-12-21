import React from 'react';
const ApartmentCard = ({allapartment})=>{
 return( 
   <div>
      {allapartment.map((apart,i)=>{
        return(
          
         <div className="grow bg-info dib br3 ma2 text-center" style={{width: '18rem'}} key={i}>
     
        
          <img src={apart.photo} className="card-img-top" width='200px' height='200px' alt="img" />
            <div className="card-body">
            <p className="text-white">City: {apart.city}</p>
            <p className="text-white">Adress: {apart.address}</p>
            <p className="text-white">Contacts: {apart.phonenumber}</p>
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