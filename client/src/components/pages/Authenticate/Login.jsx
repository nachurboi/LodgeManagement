import React, { Component } from 'react'
import {Link} from "react-router-dom"
import "./Login.css"
  export default class Login extends Component {
 constructor(props, ...rest) {
  super(props, ...rest);
  this.state = {};
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
                  <input type="text" className="form-control" placeholder="username" required  id="userlogin"/>
                </div>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-info"><i className="fas fa-key" /></span>
                  </div>
                  <input type="password" className="form-control" placeholder="password" required id="passuser" />
                </div>
                <div className="row align-items-center remember text-dark">
                  <input type="checkbox" />Remember Me
                </div>
                <div className="form-group bg-primary">
                 <Link to='/dashboard' className="bg-primary"> <input  type ="button"defaultValue="Login" className="btn float-right login_btn bg-success text-white "  id="LoginBtn"/></Link>
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
