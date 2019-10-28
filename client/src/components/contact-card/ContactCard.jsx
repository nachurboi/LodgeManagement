import React, { Component } from 'react';
import {Link} from  'react-router-dom';
export default  class ContactCard extends Component {
 constructor(props, ...rest) {
  super(props, ...rest);
  this.state = {};
 }

 render() {
  return (
   <div style={{display:'none'}} id="Contact-card">
          <div className="card" style={{width: '18rem'}}>
       
        <div className="card-body">
          <h5 className="card-title text-center text-white text-bold">Contacts</h5>
          <p className="card-text text-white text-center">Quickly meet an Agent</p>
        </div>
        <ol className="list-group list-group-flush text-center">
          <li className="list-group-item">Contact 1</li>
          <li className="list-group-item">Contact 2</li>
          <li className="list-group-item">Contact 3</li>
        </ol>
        <div className="card-body text-center">
          <Link to='/contacts' className="card-link">See more...</Link>
          
        </div>
      </div>
   </div>
  );
 }
}

ContactCard.propTypes = {};
