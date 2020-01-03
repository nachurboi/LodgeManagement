import React, { Component } from 'react'
import axios from 'axios';

 export default class CommentBox extends Component {
 constructor(props) {
  super(props);
  this.state = {
   complain:'',
   message:'',
   user_complain:'',
   isLoading:false
  };
}
handleCommentChanger(e){
 this.setState({complain:e.target.value})

}
async commentHandler(e){
      e.preventDefault();
      this.setState({isLoading:true})

  // const user_message =  
  await axios.post('http://localhost:1000/complaints',this.state)
    .then(res=>{
    
      this.setState({message:res.data.message})
      this.setState({user_complain:res.data.user_complain})
      this.setState({isLoading:false})
      this.setState({complain:''})
      // this.setState({message:''})
    })
}

 render() {
  return ( 
   <div>
        <div style={{height:'30px'}}>
          <form>
            <div className="form-group">
                  <label  className="text-success mt-2" style={{fontFamily:'cursive',fontSize:'25px'}}>Suggestion Box</label>
                  <textarea className="form-control"  rows="3" style={{maxHeight:'200px', minHeight:'100px'}} onChange={this.handleCommentChanger.bind(this)} value={this.state.complain}></textarea>
            </div>
            { this.state.message?<div className='alert alert-danger'>{this.state.message}</div>:<div></div> }
            <div>
                 {this.state.isLoading?<div className='loader'></div>:<button type="button" className="btn btn-info" onClick={this.commentHandler.bind(this)}>Submit suggestions</button>}
            </div>
          </form>
    </div>
   </div>
  );
 }
}


