import React, { Component } from 'react';

export default class Leftsidebar extends Component {
 constructor(props, ...rest) {
  super(props, ...rest);
  this.state = {};
 }

 render() {
  return (
   <div>

    <div className="card">
       <div className="card-header">idris kondi</div>
       <hr/>
       <ul className="list-group">

        <li className="list-group-item fa fa-home">Home</li>
        <li className="list-group-item fa fa-map">Expolor</li>
        <li className="list-group-item fa fa-gmail">Notification</li>
        <li className="list-group-item fa fa-envelope">Message</li>
        <li className="list-group-item">List</li>
       </ul>

    </div>
   </div>
  );
 }
}

Leftsidebar.propTypes = {};
