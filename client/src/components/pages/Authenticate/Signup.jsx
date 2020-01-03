import React, { Component } from 'react'
import {Link} from "react-router-dom"
import axios from 'axios';


export default class Signup extends Component {
 constructor(props) {
  super(props);
  this.state = {

    firstname:'',
    lastname:'',
    email:'',
    number:'',
    password:'',
    retype_password:'',
    photo:'',
    info:'',
    isLoading:false
  
  };
  
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
 //retype password changer
handle_retypePassword(e){
  this.setState({retype_password:e.target.value})
}

// number changer
 handleNumber(e){
  this.setState({number:e.target.value})
}
//email changer
handleEmail(e){
  this.setState({email:e.target.value})
}
//photo selector
handlePhoto(e){
  this.setState({photo:e.target.files[0]})

}
handleCancel(){
  this.setState({isLoading:!this.state.isLoading})
}

async handleSignUp(e){
  e.preventDefault();
  this.setState({isLoading:true});
 
  if(this.state.password!==this.state.retype_password){
      
    this.setState({info:"Password does not match"})
    this.setState({isLoading:false})
  }else{

  const formdata = new FormData();
  formdata.append('firstname',this.state.firstname);
  formdata.append("lastname",this.state.lastname);
  formdata.append("email",this.state.email);
  formdata.append("number",this.state.number);
  formdata.append("password",this.state.password);
  formdata.append("photo",this.state.photo);

  
  await axios.post('http://localhost:1000/register',formdata)

   .then( res=>{
    this.setState({info:res.data.message})
    res.data.message ==='Succesfully saved'? 
    this.props.history.push('/login'):this.props.history.push('/register')
   })
  }

//    e.preventDefault() //prevent default behaviour
//   //  this.setState({isLoading:true})

//    await axios.post('http://localhost:1000/register', this.state)
//     .then((res) => {
//       // this.setState({isLoading:false})
//       alert(res.data.message)
//       if(res.data.message ==='Account created succesfully'){
//       // this.props.history.push('/login')
//     }
//     })
//     .catch(err => console.log(err.message))
}

 render() {
  
  return (
   <div >
   <div className='row'>
   <div className=' col-sm-3 col-md-4 col-lg-3 col-xl-3'></div>
    <div className=' col-sm-6 col-md-6 col-lg-6 col-xl-6'>
    <div className="container bg-light  mt-4 mb-4">
<form className="text-center border border-light " >
            
        <p className="h6 mb-4 bg-info rounded text-white p-2">Sign up</p>
        <div className="form-row mb-4 ">
          <div className="col">
            {/* First name */}
            <input type="text" id="defaultRegisterFormFirstName" required className="form-control p-4" placeholder="First Name" value={this.state.firstname} onChange={this.handleFirstName.bind(this)} />
          </div>
          <div className="col">
            {/* Last name */}
            <input type="text" required id="defaultRegisterFormLastName" className="form-control p-4" placeholder="Last name" 
             value={this.state.lastname} onChange={this.handleLastName.bind(this)}/>
          </div>
        </div>
        {/* E-mail */}
        <input type="email" id="defaultRegisterFormEmail" required className="form-control mb-4 p-4" placeholder="E-mail" 
        value={this.state.email}
         onChange={this.handleEmail.bind(this)} />
        {/* Password */}
        <input type="password" id="defaultRegisterFormPassword" className="form-control p-4" placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock" 
        value={this.state.password} 
        onChange={this.handlePassword.bind(this)} />

        <input type="password" id="defaultRegisterFormPassword" className="form-control mt-3 p-4" placeholder=" Confirm Password" aria-describedby="defaultRegisterFormPasswordHelpBlock" 
                value={this.state.re_typepassword} 
                onChange={this.handle_retypePassword.bind(this)} />
        <small id="defaultRegisterFormPasswordHelpBlock" className="form-text text-muted mb-4">
          {/* At least 8 characters and 1 digit */}
        </small>
        {/* Phone number */}
        <input type="text" id="defaultRegisterPhonePassword" required className="form-control p-4 " placeholder="Phone number" aria-describedby="defaultRegisterFormPhoneHelpBlock"
         value={this.state.number}
          onChange={this.handleNumber.bind(this)} />
          {/*  photo */}
          <div className='row'>
          <div className='col-sm-3 '></div>
<div className='col-sm-6 '>
<div className="form-group " enctype="multipart/form-data">
                        <label htmlFor="exampleFormControlFile1" className='text-info text-center border-bottom m-2'>Upload a photo</label>
                        <input type="file" className="form-control-file rounded " id="exampleFormControlFile1" onChange={this.handlePhoto.bind(this)}/>
                     </div>     
</div>
<div className='col-sm-3'></div>
    </div>                
     {/* photo */}
        { this.state.info !==''? 
        <div className='alert alert-danger'>{this.state.info}</div> : <div></div>}

        {this.state.isLoading?<div className='loader'></div>:<button className="btn btn-info  " onClick={this.handleSignUp.bind(this)}>Sign Up</button>}
        {this.state.isLoading?<div className='btn  btn-md  btn-info'
         onClick={this.handleCancel.bind(this)}>Cancel</div>:<div></div>}

        <hr />
        {/* Terms of service */}
        <p>By Clicking 
          <em> Sign Up </em> you agree to our
          <Link to target="_blank"> terms of service</Link>
        </p>
        </form>
        </div>
        <div className=' col-sm-3 col-md-3 col-lg-3 col-xl-3'></div>
    </div>    
      </div>
   </div>
  );
 }
}


