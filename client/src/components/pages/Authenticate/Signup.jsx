import React, { Component } from 'react'
import {Link} from "react-router-dom"
import axios from 'axios';
import {Loader} from 'react-loader-spinner'

export default class Signup extends Component {
 constructor(props) {
  super(props);
  this.state = {
    firstname:'',
    lastname:'',
    email:'',
    number:'',
    password:'',
    isLoading:false
  };
  
 }
async handleSignUp(e){

   e.preventDefault() //prevent default behaviour
   this.setState({isLoading:true})

   await axios.post('http://localhost:1000/register', this.state)
    .then((res) => {
      this.setState({isLoading:false})
      alert(res.data.message)
      this.props.history.push('/login')
      console.log(res.data.message)
    })
    .catch(err => console.log(err.message))
 }
 //firstname changer
 handleFirstName(e){
   this.setState({firstname:e.target.value})
 }
 //last name changer
 handleLastName(e){
   this.setState({lastname:e.target.value})
 }
 //password changer
 handlePassword(e){
   this.setState({password:e.target.value})
 }
// number changer
 handleNumber(e){
  this.setState({number:e.target.value})
}
//email changer
handleEmail(e){
  this.setState({email:e.target.value})
}




 render() {
   if(this.state.isLoading===true){
     return(
       <div>
        <Loader
         type="Puff"
         color="#00BFFF"
         height={100}
         width={100}
         timeout={3000} //3 secs
      />
       </div>
     );
   }
  return (
   <div className='mt-4 mb-4'>
   <div className='row'>
   <div className=' col-sm-4 col-md-4 col-lg-4 col-xl-4'></div>
    <div className=' col-sm-4 col-md-4 col-lg-4 col-xl-4'>
    <div className="Container bg-light ">
<form className="text-center border border-light p-4" action="#!">
            
        <p className="h6 mb-4 bg-info rounded text-white p-2">Sign up</p>
        <div className="form-row mb-4 ">
          <div className="col">
            {/* First name */}
            <input type="text" id="defaultRegisterFormFirstName" className="form-control" placeholder="First Name" value={this.state.firstname} onChange={this.handleFirstName.bind(this)} />
          </div>
          <div className="col">
            {/* Last name */}
            <input type="text" id="defaultRegisterFormLastName" className="form-control" placeholder="Last name" 
             value={this.state.lastname} onChange={this.handleLastName.bind(this)}/>
          </div>
        </div>
        {/* E-mail */}
        <input type="email" id="defaultRegisterFormEmail" className="form-control mb-4" placeholder="E-mail" 
        value={this.state.email}
         onChange={this.handleEmail.bind(this)} />
        {/* Password */}
        <input type="password" id="defaultRegisterFormPassword" className="form-control" placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock" 
        value={this.state.password} 
        onChange={this.handlePassword.bind(this)} />
        <small id="defaultRegisterFormPasswordHelpBlock" className="form-text text-muted mb-4">
          At least 8 characters and 1 digit
        </small>
        {/* Phone number */}
        <input type="text" id="defaultRegisterPhonePassword" className="form-control" placeholder="Phone number" aria-describedby="defaultRegisterFormPhoneHelpBlock"
         value={this.state.number}
          onChange={this.handleNumber.bind(this)} />
        <small id="defaultRegisterFormPhoneHelpBlock" className="form-text text-muted mb-4">
          Optional - for two step authentication
        </small>
        {/* Newsletter */}
        <div className="custom-control custom-checkbox">
          <input type="checkbox" className="custom-control-input" id="defaultRegisterFormNewsletter" />
          <label className="custom-control-label" htmlFor="defaultRegisterFormNewsletter">Subscribe to our newsletter</label>
        </div>
        {/* Sign up button */}
        <button className="btn btn-info my-4 " onClick={this.handleSignUp.bind(this)} >Sign Up</button>
        {/* Social register */}
        <p>Or Sign Up With:</p>
        <Link to="#" className="mx-2" role="button"><i className="fab fa-facebook-f light-blue-text" /></Link>
        <Link to="#" className="mx-2" role="button"><i className="fab fa-twitter light-blue-text" /></Link>
        <Link to="#" className="mx-2" role="button"><i className="fab fa-linkedin-in light-blue-text" /></Link>
        <Link to="#" className="mx-2" role="button"><i className="fab fa-github light-blue-text" /></Link>
        <hr />
        {/* Terms of service */}
        <p>By Clicking 
          <em> Sign Up </em> you agree to our
          <Link to target="_blank"> terms of service</Link>
        </p></form>
        </div>
        <div className=' col-sm-4 col-md-4 col-lg-4 col-xl-4'></div>
    </div>


    
      </div>
   </div>
  );
 }
}


