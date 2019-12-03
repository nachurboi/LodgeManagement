import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import Axios from 'axios';

export default class AddHouseCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typeofapartment:'',
      address:'',
      city:'',
      phonenumber:''

    };
    this.handleAddHouse = this.handleAddHouse.bind(this);
    this.handleApartmentType = this.handleApartmentType.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
    this.handleCity= this.handleCity.bind(this);
    this.handleNumber = this.handleNumber.bind(this);
  }
  
    handleApartmentType(e){
      this.setState({typeofapartment:e.target.value})
      console.log(this.state.typeofapartment)
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
    
    async handleAddHouse(e){
      e.preventDefault();
      await Axios.post('http://localhost:1000/apartment', this.state)
      .then((res)=>{
          alert(<div className=' alert alert-danger'>Apartment Added Successfully</div>)
      }).catch( err=>{ console.log(err)})

    }

  render() {
    return (
      <div>
         <div>
        <div className='row'>
          <div className='col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3'></div>
          <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6'>
           <div className='m-4'>
           <div className =' mt-4 mb-4 m-auto bg-info' style={{ width:'40rem'}}>              
           <form className="text-center border border-light p-4" action="#!">
            
            <p className="h6 mb-4 bg-info rounded text-white p-2">Add An Apartment</p>
            <div className="form-row mb-4 ">
              <div className="col">   
                <input type="text" id="defaultRegisterFormFirstName" className="form-control" placeholder="Type Of Apartment" onChange={this.handleApartmentType} value={this.state.typeofapartment}/>
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
                    <div className='col-sm-6 border-right'>
                     <div className="form-group">
                        <label htmlFor="exampleFormControlFile1" className='text-white text-center border-bottom'>Enter Img 1</label>
                        <input type="file" className="form-control-file rounded" id="exampleFormControlFile1" />
                     </div>
                  </div>
                  <div className='col-sm-6'>
                    <div className="form-group">
                      <label htmlFor="exampleFormControlFile1" className='text-white text-right border-bottom'>Enter Img 2</label>
                      <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                    </div>
                  </div>
            </div>
           
            <button type="button" class="btn bg-white grow text-primary">Submit</button>
            </form>
                 
            </div>
           </div>
          </div>
          <div className='col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3'></div>
        </div>
        </div>
      </div>
    );
 
  }
}


