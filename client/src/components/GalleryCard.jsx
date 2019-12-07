import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Axios from 'axios'
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
   alert(res.data.Message)
   
  })
}
 render() {
  const {allapartment} = this.state  
  return (
   
   <div>
   
{allapartment ? allapartment.map((house,index)=>{

  const { _id,address,city,photo}= house
  
  return( <div className="card bg-light m-4 " style={{width: '18rem'}}>
        <img src={photo} className="card-img-top" alt=" " />
        <div className="card-body">
      <h1>{city}</h1>
      <h1>{address}</h1>
          <Link to="" className="btn btn-info btn-block">View more...</Link>
        </div>
      </div>
)

}):<div>
  No listed Houses
</div>}
  
   </div>
  );
 }
}

GalleryCards.propTypes = {};
