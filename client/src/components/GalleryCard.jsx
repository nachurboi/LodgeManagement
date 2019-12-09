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
  console.log('message')
 Axios.get('http://localhost:1000/allhouse')
 .then(res=>{
   console.log(res.data.allapartment)
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
        
    <div className=" grow tc bg-light-green dib br3 ma2" style={{width: '18rem'}}>
  
        <img src={photo} className="card-img-top" alt=" " />
            <div className="card-body">
          <p>City: {city}</p>
          <p>Adress: {address}</p>
          <p>Contacts: {phonenumber}</p>
              <Link to="" className="btn btn-info btn-block">View more...</Link>
            </div>
      </div>
)

}):<div>No listed Houses</div>}
  </div>
  
  
  );
 }
}

GalleryCards.propTypes = {};
