import React, { Component } from 'react';
import ApartmentTable from './ApartmentTable';
import axios from 'axios'
export default class ApartmentTableList extends Component {
 constructor(props) {
  super(props);
  this.state = {
   // sn:[], 
   // number:[], 
   // name:[] , 
   // address:[],
   allapartment:[]
  };
 }
 componentDidMount(){
    axios.get('http://localhost:1000/allapartment')
    .then(res=>{
     this.setState({allapartment:res.data.message})
   //   console.log(this.state.allapartment)
    })
 }
 render() {
    const {allapartment} = this.state;
  return (
   <div className='overflow-auto' style={{height:'600px'}}>
    {!allapartment? <div>Loading.....</div>:allapartment.map((apart,i)=>{
     const{_id,address, apartment, city, phonenumber}=apart
     return( 
         <div> 
         <ApartmentTable sn={i+1} 
         number={phonenumber} 
         city={city}  
         address={address}
          apartment={apartment}
          id={_id}
         />
         </div>);
    })}
   </div>
  );
 } 
}

ApartmentTableList.propTypes = {};
