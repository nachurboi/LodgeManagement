import React, { Component } from 'react'
// import {Link} from "react-router-dom";
import "../../../bootstrap-4.3.1-dist/css/bootstrap.css"
import GalleryCard from '../../GalleryCard'



export default class Gallery extends Component {
 constructor(props) {
  super(props);
  this.state = {};
 }

 render() {
  return (
    <div>
    <div className='container-fluid bg-secondary vh-100'>
      <GalleryCard/>
    </div>
   </div>
  );
 }
}


