import React, { Component } from 'react'

 export default class GalleryCards extends Component {
 constructor(props) {
  super(props);
  this.state = {
    
  };
 }

 render() {
  return (
   <div className='m-4' >
   <div className="card bg-light" style={{width: '18rem'}}>
        <img src="..." className="card-img-top" alt=" image-here" />
        <div className="card-body">
          <a to="#" className="btn btn-info btn-block">View more...</a>
        </div>
      </div>

   </div>
  );
 }
}

GalleryCards.propTypes = {};
