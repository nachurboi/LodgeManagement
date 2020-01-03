import React, { Component } from 'react'
// import axios from 'axios';
import CommentTable from './CommentTable';



export default class CommentTablelist extends Component {
 constructor(props,{allcomplain}) {
  super(props);
  this.state = {
   allcomplain:this.props.allcomplain
  };
 }
 
 render() {
  return (
   <div className='mt-4  overflow-auto'style={{height:'500px'}}>
   <div className='text-center text-warning bolder bg-dark rounded p-3'>Comments/Complains</div>
    {this.props.allcomplain.map((complains,i)=>{
      const {_id, complain} = complains
     
     return(
      <div>
       <CommentTable id={_id} complain={complain}/>
      </div>
      );

    })}
   </div>
  );
 }

}
