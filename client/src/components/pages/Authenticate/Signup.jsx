import React, { Component } from 'react'
import {Link} from "react-router-dom"
export default class Signup extends Component {
 constructor(props, ...rest) {
  super(props, ...rest);
  this.state = {};
 }

 render() {
  return (
   <div>

<div className="Container-fluid bg-light ">
<form className="text-center border border-light p-4" action="#!">
        <p className="h6 mb-4 bg-info rounded text-white p-2">Sign up</p>
        <div className="form-row mb-4 ">
          <div className="col">
            {/* First name */}
            <input type="text" id="defaultRegisterFormFirstName" className="form-control" placeholder="First Name" />
          </div>
          <div className="col">
            {/* Last name */}
            <input type="text" id="defaultRegisterFormLastName" className="form-control" placeholder="Last name" />
          </div>
        </div>
        {/* E-mail */}
        <input type="email" id="defaultRegisterFormEmail" className="form-control mb-4" placeholder="E-mail" />
        {/* Password */}
        <input type="password" id="defaultRegisterFormPassword" className="form-control" placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock" />
        <small id="defaultRegisterFormPasswordHelpBlock" className="form-text text-muted mb-4">
          At least 8 characters and 1 digit
        </small>
        {/* Phone number */}
        <input type="text" id="defaultRegisterPhonePassword" className="form-control" placeholder="Phone number" aria-describedby="defaultRegisterFormPhoneHelpBlock" />
        <small id="defaultRegisterFormPhoneHelpBlock" className="form-text text-muted mb-4">
          Optional - for two step authentication
        </small>
        {/* Newsletter */}
        <div className="custom-control custom-checkbox">
          <input type="checkbox" className="custom-control-input" id="defaultRegisterFormNewsletter" />
          <label className="custom-control-label" htmlFor="defaultRegisterFormNewsletter">Subscribe to our newsletter</label>
        </div>
        {/* Sign up button */}
        <button className="btn btn-info my-4 " type="submit">Sign Up</button>
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




   </div>
  );
 }
}


