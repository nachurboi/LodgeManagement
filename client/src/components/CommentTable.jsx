import React, { Component } from 'react'
import axios from 'axios';

class CommentTable extends  Component{
  constructor(props,{id, complain }){
    super(props);
    this.state={};
    // handleDelete = this.handleDelete.bind(this);
  }
  async handleDelete(e){
    e.preventDefault();

    await axios.delete(`http://localhost:1000/del/complaint/${this.props.id}`)
  
  }
  render(){
    // console.log(this.props.id)
    return(
      <div  className='border bg-light mt-1 rounded  p-3'>
         <p className='text-center text-success'> <span className='bg-dark text-white  p-1 m-1'>ID:</span>{this.props.id}</p>
        <div className='text-center text-break p-1 m-1' ><p>{this.props.complain}</p> 
        <hr/>
        <div className='btn btn-sm btn-danger mb-1 ' onClick={this.handleDelete.bind(this)}>Delete</div>
        </div>
      </div>  
  );
    }

}
export default CommentTable;