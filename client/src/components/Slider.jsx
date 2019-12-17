import React, { Component } from 'react'
import {Link} from 'react-router-dom'
// import GalleryCard from './GalleryCard'
import Axios  from 'axios';

// import Img1 from '../img/img1.jpg'
// import Img2 from '../img/img2.jpg'
// import Img3 from '../img/img3.jpg'
// import GalleryCards from './GalleryCard'
// import { log } from 'util';


export default class Slider extends Component {
 constructor(props) {
  super(props);
  this.state = {
    allapartment:[],
    apartment_photo:[]
  };
 }
 componentDidMount(){

  Axios.get('http://localhost:1000/allhouse')

  .then(res=>{
    this.setState({allapartment:res.data.allapartment})
    // this.setState({apartment_photo:res.data.allapartment[0].photo})
      const{allapartment,apartment_photo} = this.state;
      allapartment.map((photos,index)=>{
          return( 
            this.setState({apartment_photo:apartment_photo.push(photos.photo)})
            // this.state.apartment_photo.push(photos.photo)
          )
      
      })

    // console.log(apartment_photo)
    
   }) 
   
 }
 render() {
   

  return (
   <div className=' mt-4'>
      {/*Carousel Wrapper*/}
      <div id="carousel-example-2" className="carousel slide carousel-fade z-depth-1-half" data-ride="carousel">
        {/*Indicators*/}
        <ol className="carousel-indicators">
          <li data-target="#carousel-example-2" data-slide-to={0} className="active" />
          <li data-target="#carousel-example-2" data-slide-to={1} />
          <li data-target="#carousel-example-2" data-slide-to={2} />
        </ol>
        {/*/.Indicators*/}
        {/*Slides*/}
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            <div className="view">
              <img className="d-block w-100" src={"https://res.cloudinary.com/taiwohassan/image/upload/v1575893079/vunfnywnx2ejelgp1gje.jpg"}height='600px' alt="First slide" />
              <div className="mask rgba-black-light" />
            </div>
            <div className="carousel-caption">
              <button className='btn btn-sm btn-secondary' >
              <Link className='text-white nav-link' to='/login'>See More...</Link>
              </button>
              <p> Already Well furnihsed 4 bedroom flat</p>
            </div>
          </div>
          <div className="carousel-item">
            {/*Mask color*/}
            <div className="view">
              <img className="d-block w-100" src={"https://res.cloudinary.com/taiwohassan/image/upload/v1575730238/gpgomwhjiroioalh8uzz.jpg" }height='600px'alt="Second slide" />
              <div className="mask rgba-black-light" />
            </div>
            <div className="carousel-caption">
                <button className='btn btn-sm btn-secondary' >
                <Link className='text-white nav-link' to='/login'>See More. . .</Link>
                </button>
                 <p>Already furnihsed 4 bedroom flat</p>
            </div>
          </div>
          <div className="carousel-item">
            {/*Mask color*/}
            <div className="view">
              <img className="d-block w-100" src={"https://res.cloudinary.com/taiwohassan/image/upload/v1575893079/vunfnywnx2ejelgp1gje.jpg"  } height='600px' alt="Third slide" />
              <div className="mask rgba-black-light" />
            </div>
            <div className="carousel-caption">
            <button className='btn btn-sm btn-secondary' ><Link className='text-white nav-link' to='/login'>See More...</Link></button>
              <p>Already furnihsed 6 bedroom flat</p>
            </div>
          </div>
        </div>
        {/*/.Slides*/}
        {/*Controls*/}
        <a className="carousel-control-prev" href="#carousel-example-2" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carousel-example-2" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
        {/*/.Controls*/}
      </div>
      {/*/.Carousel Wrapper*/}
   </div>
  );
 }
}

