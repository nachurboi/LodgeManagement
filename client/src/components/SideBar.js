import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';

class SideBar extends Component {
  constructor(props, ...rest) {
    super(props, ...rest);
    this.state = {
      firstname:'',
      lastname:'',
      photo:'',
      user_id:'',
      number:''
    };
  }

    componentDidMount(){
     

      const token = window.localStorage.getItem("token");
      // let id = window.localStorage.getItem("id");
      // let email = window.localStorage.getItem("email");
      // let photo = window.localStorage.getItem("photo")
      // let number= window.localStorage.getItem('number')
      if(token){
       
        let id = window.localStorage.getItem("id");
        let email = window.localStorage.getItem("email");
        let firstname = window.localStorage.getItem("firstname");
        let photo = window.localStorage.getItem("photo")
        let number= window.localStorage.getItem('number')
        let lastname = window.localStorage.getItem('lastname');
      
        this.setState({firstname:firstname, user_id:id,email:email,number:number, photo:photo, lastname:lastname})}

        Axios.get("http://localhost:1000/alluser")
      .then( res=>{
      // this.setState({alluser:res.data.info})  
      })
    
    }
         
  render() {
    console.log(this.state.lastname)
  
    return (

      <div>
        <div className="card text-center m-3 bg-light" style={{width: '18rem'}}>
         <div className='card-header text-white bg-secondary text-center shadow'>Welcome,{this.state.firstname.toUpperCase()}</div>
         <div className='card-body'>
         <div className='m-3'> <img src={this.state.photo} className="card-img-top" alt="enter image" /></div>
        
       <div className='btn btn-info text-white btn-block grow'> <Link className='text-white' to='/addhouse'> Add an Apartment</Link></div> 
         <div className='btn btn-info text-white grow btn-block '> View Apartments</div>
         <Link to={`/${this.state.user_id}`}></Link>
        <div className='card-footer'></div>
         </div>
      </div>
      </div>
    );
  }
}

export default SideBar
