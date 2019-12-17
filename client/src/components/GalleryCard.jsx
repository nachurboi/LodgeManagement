import React, { Component } from 'react'
import axios from 'axios'
import SearchBox from './SearchBox'
import ApartmentCard from './ApartmentCard'
import '../Loaders/loader.css'


// import 'tachyons' 

 export default class GalleryCards extends Component {
 constructor(props) {
  super(props);
  this.state = {
    allapartment:[],
    // searchfield:'',
    alladdress:[],
    E:''
   
    
  };
  this.handleSearchChange = this.handleSearchChange.bind(this);
  this.handleSearchClick = this.handleSearchClick.bind(this);

  
 }
 handleSearchChange=(e)=>{
  this.setState({E:e.target.value})
}

handleSearchClick(e){
  
}

 componentDidMount(){
   

 axios.get('http://localhost:1000/allapartment')
 .then(res=>{
  return(
    this.setState({allapartment:res.data.message})
    )
  })
 }

 render() {
      const {allapartment,E} = this.state  
      const filtered_address = allapartment.filter( apartment=>{
        return( apartment.address.toLowerCase().includes(E.toLowerCase()));
      })
      
      
      return(
<div>
    <div>
        <SearchBox handleSearchChange={this.handleSearchChange}
        e={this.state.E} handleSearchClick={this.handleSearchClick}/> 
    </div>
    {
      !allapartment.length?<div className='text-info bolder'><div className='loader bg-success text-center'></div>LOADING APARTMENTS...</div>:
      (<div>{<ApartmentCard key allapartment={filtered_address}/>}</div>)
    }
        
</div>
);
 }
}

