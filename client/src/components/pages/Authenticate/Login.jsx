import React, { Component } from 'react'
import {Link} from "react-router-dom"
import "./Login.css"
import axios from 'axios'


  export default class Login extends Component {
 constructor(props) {
  super(props);
  this.state = {
    email:'',
    password:'',
    info:''
  };
 }

 async handleLogin(e){
    e.preventDefault()
    await axios.post('http://localhost:1000/login',this.state)
    .then((res) => {
      console.log(res.data.message) 
      this.setState({info:res.data.message})
      if(res.data.message === "Login successful"){
        console.log(res.data.firstname) 
        window.localStorage.setItem('token', JSON.stringify(res.data.token))
        window.localStorage.setItem('firstname', res.data.firstname)

      this.props.history.push('/dashboard')
      
    }
    })

 }


 emailHandle(e){

 this.setState({email:e.target.value})

 console.log(this.state.email)
 }
 passwordHandle(e){
   this.setState({password:e.target.value})
   console.log(this.state.password)
 }

 render() {
  return (
   <div>

<div className="container login-container">
        <div className="d-flex justify-content-center h-100">
          <div className="card  bg-info">
            <div className="card-header text-center bg-info">
              <h3>Login</h3>

            </div>
            <div className="card-body bg-light">
              <form>
                <div className="input-group form-group">
                  <div className="input-group-prepend ">
                    <span className="input-group-text bg-info"><i className="fas fa-user" /></span>
                  </div>
                  <input type="email" className="form-control" placeholder="username" required  id="userlogin"  value ={this.state.email}onChange={this.emailHandle.bind(this)}/>
                </div>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-info"><i className="fas fa-key" /></span>
                  </div>
                  <input type="password" className="form-control" placeholder="password" required id="passuser" value={this.state.password} onChange={this.passwordHandle.bind(this)} />
                </div>
                {this.state.info !== ""?<div className='alert alert-danger'>{this.state.info}</div>:<div></div>}
                <div className="row align-items-center remember text-dark">
                  <input type="checkbox" />Remember Me
                </div>
                <div className="form-group bg-primary">
                 <button className=" btn bg-primary float-right login_btn bg-success text-white" onClick={this.handleLogin.bind(this)}>Login</button>
                </div>
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
      </div>
   </div>
  );
 }
}

Login.propTypes = {};
