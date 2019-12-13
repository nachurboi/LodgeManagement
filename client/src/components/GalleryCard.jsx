import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Axios from 'axios'


// import 'tachyons'

 export default class GalleryCards extends Component {
 constructor(props) {
  super(props);
  this.state = {
    allapartment:[]
    
  };
 }


 componentDidMount(){
 Axios.get('http://localhost:1000/allapartment')
 .then(res=>{
   this.setState({allapartment:res.data.allapartment})
   
  })
}
 render() {
  const {allapartment} = this.state  
  return (
  
  <div>
  
{allapartment ? allapartment.map((apartment_info,index)=>{

  const { _id,address,city,photo,phonenumber} = apartment_info

  
  return(
        
    <div className=" grow tc bg-info dib br3 ma2 " style={{width: '18rem'}}>
  
        <img src={photo} className="card-img-top" alt=" " />
            <div className="card-body">
          <p className="text-white">City: {city}</p>
          <p className="text-white">Adress: {address}</p>
          <p className="text-white">Contacts: {phonenumber}</p>
              {/* <Link to="" className="btn btn-info btn-block">View more...</Link> */}
            </div>
      </div>
)

}):<div>No listed Houses</div>}
  </div>
  
  
  );
 }
}

GalleryCards.propTypes = {};
