import React, { Component } from 'react'

export default class SearchBox extends Component {
 constructor(props, ...rest) {
  super(props, ...rest);
  this.state = {};
 }

 render() {
  return (
    <div>
    <nav className="navbar navbar-light bg-info special-color-dark border-top border-white">
        <form className="form-inline">
          <input className="form-control mr-lg-4 " type="search" placeholder="Subscribe for Notifications" aria-label="Search" />
          <button className="btn btn-outline-secondary my-2 my-sm-0 text-white" type="submit">Notify Me</button>
        </form>
      </nav>

   </div>
  );
 }
}


 