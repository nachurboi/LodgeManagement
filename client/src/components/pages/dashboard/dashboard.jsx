import React, { Component } from 'react'
import SideBar from '../../SideBar'
import GalleryCard from '../../GalleryCard'
import CommentBox from '../../CommentBox'


export default class Dashboard extends Component {
 constructor(props) {
  super(props);
  this.state = {
    allhouse:'',
    seachfield:''
     
  };
 }

//  componentDidMount(){
//    axios.get('http://localhost:1000/allapartment').then(res=>{
//      console.log(res.data.info)
//    })
//  }

 render() {
    
  return (
   <div>
      <div className=' container-fluid vh-75 '>
        <div className='row '>
          <div className=' col-xs-12  col-sm-12  col-md-4  col-lg-4  col-xl-4'><div><SideBar/></div></div>
          <div className='col-xs-12  col-sm-12  col-md-8  col-lg-8  col-xl-8 text-center'><div className='text-center bg-light  vh-75' style={{overflow:'scroll'}}><GalleryCard /><CommentBox/></div>
          </div>
        </div>
      </div>  
  </div>
  );
 }
}

