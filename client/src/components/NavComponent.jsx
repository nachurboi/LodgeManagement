import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import VisionCard from '../components/VisionCard'
import ContactCard from './contact-card/ContactCard'




export default class NavComponent extends Component {


 constructor(props) {
  super(props);
  this.state = {
    vision: true,
    contacts:false

  };
    this.toggleHandler = this.toggleHandler.bind(this)
 }
 toggleHandler=(event)=>{
   const {vision,contacts}= this.state;
   this.setState({vision:!vision && VisionCard})
   this.setState({contacts:!contacts && ContactCard})

 }

 render() {
  return (
   <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-info" style={{fontFamily:'cursive'}}>
        <h3 className="navbar-brand text-white text-shadow" href="#" style={{fontSize:'30px', fontFamily:'cursive'}}>HOUSIFY</h3>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse text-bold" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link text-bold text-white">Contact-Admin <span className="sr-only">(current)</span></Link>
            </li>
          </ul>
        </div>
        <div className='float-right'>
        <ul className='navbar-nav'>
        <li className="nav-item">
              <Link className="nav-link text-white text-bold" to='./login'>Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to='/register'>Register</Link>
            </li>
        </ul>
        </div>
      </nav>
   </div>
  );
 }
}

