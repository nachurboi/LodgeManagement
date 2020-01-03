import React,{Component} from 'react';
import axios from 'axios';


export default class AddHouseCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message:'',
      apartment:'',
      address:'',
      city:'',
      phonenumber:'',
      photo:'',
      isLoading:false


    };
    this.handleAddHouse = this.handleAddHouse.bind(this);
    this.handleApartmentType = this.handleApartmentType.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
    this.handleCity= this.handleCity.bind(this);
    this.handleNumber = this.handleNumber.bind(this);
    // this.handleLoader = this.handleLoader.bind(this)
    // this.handlePhoto = this.handlePhoto.bind(this);


  }

  
    handleApartmentType(e){
      this.setState({apartment:e.target.value})
    
    }
    handleAddress(e){
      this.setState({address:e.target.value})
    }
    handleCity(e){
      this.setState({city:e.target.value})
    }
    handleNumber(e){
      this.setState({phonenumber:e.target.value})
    }

    handlePhoto(e){
      this.setState({photo:e.target.files[0]})
      console.log(e.target.value)
    }
    // handleLoader(){
    //   this.setState({isLoading:true})
    // }
    
    async handleAddHouse(e){
      e.preventDefault();
      this.setState({isLoading:true})

      const formdata = new FormData();
      formdata.append('photo',this.state.photo);
      formdata.append("city",this.state.city);
      formdata.append("phonenumber",this.state.phonenumber);
      formdata.append("address",this.state.address);
      formdata.append("apartment",this.state.apartment);
       await axios.post('http://localhost:1000/apartment',formdata)
       .then( res=>{
        this.setState({message:res.data.message})
        res.data.message ==='Registered Successfully'? this.props.history.push('/dashboard')
        :this.props.history.push('/addhouse')
        // this.setState({isLoading:false})
       })
       
       
    }

  render() {
    return (
      <div>
         <div>
        <div className='row'>
          <div className='col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3'></div>
          <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6'>
           <div className='m-4'>
           <div className =' mt-4 mb-4 m-auto bg-info rounded'>              
           <form className="text-center border border-light p-4 rounded" action="#!">
            
            <p className="h6 mb-4 bg-info rounded text-white p-2">Add An Apartment</p>
            <div className="form-row mb-4 ">
              <div className="col">   
                <input type="text" id="defaultRegisterFormFirstName" className="form-control" placeholder="Type Of Apartment" onChange={this.handleApartmentType} value={this.state.apartment}/>
              </div>
              
            </div>
            <div className="form-row mb-4 ">
              <div className="col">   
                <input type="text" id="defaultRegisterFormFirstName" className="form-control" placeholder="Address Of Apartment" value={this.state.address} onChange={this.handleAddress}/>
              </div>
            </div>
            <div className="form-row mb-4 ">
              <div className="col">   
                <input type="text" id="defaultRegisterFormFirstName" className="form-control" placeholder="City" value={this.state.city} onChange={this.handleCity}/>
              </div>
            </div>
            
            <div className="form-row mb-4 ">
              <div className="col">   
                <input type="text" id="defaultRegisterFormFirstName" className="form-control" placeholder="Phone Number"  value={this.state.phonenumber} onChange={this.handleNumber}/>
              </div>
            </div>
            
            <div className='row mt-4 mb-4'>
                     <div className="form-group" enctype="multipart/form-data">
                        <label htmlFor="exampleFormControlFile1" className='text-white text-center text-bold decoration-none shadow'>SELECT AN IMAGE</label>
                        <input type="file" className="form-control-file border shadow col" id="exampleFormControlFile1" onChange={this.handlePhoto.bind(this)}/>
                     </div>
            </div>
            <button type="button" 
            className="btn bg-white grow text-primary" 
            onClick={this.handleAddHouse}>
            {this.state.isLoading?<div className='loader'>Loading</div>:"Submit"}
            </button>
            </form>         
            </div>

           </div>
           {this.state.message?<div className='alert alert-danger text-center text-dark'>
              {this.state.message}</div>:<div></div>}
          </div>
          <div className='col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3'></div>
        </div>
        </div>
      </div>
    );
 
  }
}


