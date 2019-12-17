import React, { Component } from 'react'
import {Link} from "react-router-dom"
import "./Login.css"
import axios from 'axios'
import '../../../Loaders/loader.css'

  export default class Login extends Component {
 constructor(props) {
  super(props);
  this.state = {
    email:'',
    password:'',
    info:'',
    isLoading:false
  };
 }
 async handleLogin(e){
    
  e.preventDefault()

    this.setState({isLoading:true})

    await axios.post('http://localhost:1000/login',this.state)
    .then((res) => {
      this.setState({info:res.data.message})

      if(res.data.message === "Login successful"){

        window.localStorage.setItem('token', JSON.stringify(res.data.token))
        window.localStorage.setItem('firstname', res.data.firstname)
        window.localStorage.setItem("lastname", res.data.lastname)
        window.localStorage.setItem('id', res.data.id)
        window.localStorage.setItem('photo',res.data.photo)
        window.localStorage.setItem('email',res.data.email)
        window.localStorage.setItem('number',res.data.number)
        
        this.setState({isLoading:false})
        this.props.history.push('/dashboard')
      
    }else{
      this.props.history.push('/login')
      this.setState({isLoading:false})
    }
    })

 }


 emailHandle(e){this.setState({email:e.target.value})}
 passwordHandle(e){this.setState({password:e.target.value})}

 render() {
  return (
   <div style={{height:'700px'}} className='mt-4 mb-4'>
    
    <div className="card bg-info m-auto" style={{height:"50%",width:'50%'}}>
            <div className="card-header text-center bg-info">
              <h3>Login</h3></div>
            <div className="card-body bg-light">
              <form>
                <div className="input-group form-group mt-4 mb-4">
                  <div className="input-group-prepend ">
                    <span className="input-group-text bg-info"><i className="fas fa-user" /></span>
                  </div>
                  <input type="email" className="form-control p-4" placeholder="username" required  id="userlogin"  value ={this.state.email}onChange={this.emailHandle.bind(this)} style={{fontSize:'30px'}}/>
                </div>
                <div className="input-group form-group mt-4 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-info"><i className="fas fa-key" /></span>
                  </div>
                  <input type="password" className="form-control p-4" placeholder="password" required id="passuser" value={this.state.password} onChange={this.passwordHandle.bind(this)} />
                </div>
                {this.state.info !== ""?<div className='alert alert-danger'>{this.state.info}</div>:<div></div>}

                {this.state.isLoading===true?<div className='loader ml-auto'></div>: <div className="form-group bg-primary">
              
              <button className=" btn bg-primary float-right login_btn bg-success text-white mb-2" onClick={this.handleLogin.bind(this)}>{this.state.spinner}Login</button>
             </div>}
              </form>
            </div>
            <div className="card-footer bg-light">
              <div className="d-flex justify-content-center links text-dark">
                Don't have an account?<Link to='/signup' className="text-primary hover">Sign Up</Link>
              </div>
              <div className="d-flex justify-content-center text-dark">
                <Link to='/passwordreset' className="text-danger">Forgot Your Password?</Link>
              </div>
            </div>
          </div>
   </div>
  );
  
 }
 
}

