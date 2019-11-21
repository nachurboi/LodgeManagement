import React, { Component } from 'react'
import "../../../bootstrap-4.3.1-dist/css/bootstrap.css"

 export default class GalleryCards extends Component {
 constructor(props) {
  super(props);
  this.state = {
     cardimg:''
  };
 }

 render() {
  return (
   <div className='pt-2' >
   <div className="card" style={{width: '18rem'}}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
   
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>

   </div>
  );
 }
}

GalleryCards.propTypes = {};
