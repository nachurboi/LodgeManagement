import React, { Component } from 'react'
 export default class Footer extends Component {
 constructor(props, ...rest) {
  super(props, ...rest);
  this.state = {};
 }

 render() {
 
  return (
   <div className=''>
      <footer className="page-footer font-small special-color-dark pt-4 bg-info">
        <div className="footer-copyright text-center py-3 text-white">© Taeb Concept 2019 All right reserved: </div>
      </footer>
   </div>
  ); 
 }
}

Footer.propTypes = {};
