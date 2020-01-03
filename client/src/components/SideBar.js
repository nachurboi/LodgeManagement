import React,{Component} from 'react';
import {Link} from 'react-router-dom';


class SideBar extends Component {
  constructor(props, ...rest) {
    super(props, ...rest);
    this.state = {
      firstname:'',
      lastname:'',
      photo:'',
      user_id:'',
      number:'',
      isLoading:false
    };
    this.handleisLoading = this.handleisLoading.bind(this)
  }
  handleisLoading(){
    this.setState({isLoading:true})
  }

    componentDidMount(){
     
      const token = window.localStorage.getItem("token");
      if(token){
       
        let id = window.localStorage.getItem("id");
        let email = window.localStorage.getItem("email");
        let firstname = window.localStorage.getItem("firstname");
        let photo = window.localStorage.getItem("photo")
        let number= window.localStorage.getItem('number')
        let lastname = window.localStorage.getItem('lastname');
      
        this.setState({firstname:firstname, user_id:id,email:email,number:number, photo:photo, lastname:lastname})}
      }
         
  render() {
    return (

      <div>
        <div className=" text-center m-3 bg-light" style={{width: '70%'}}>
        
         <div className='card-header text-white bg-secondary text-center shadow'>Welcome,{this.state.firstname.toUpperCase()}</div>
         <div className=' card-body overflow-auto'>
         <div className=''> <div className='overflow-hidden text-center rounded'><img src={this.state.photo} style={{width:'150px', height:'150px'}}  className="card-img-top"  alt="img" /></div> 
         </div>
        {!this.state.isLoading?
          <Link className='text-white ' to='/addhouse'>
          <div className='btn btn-info text-white btn-block grow mt-3' onClick={this.handleisLoading}>
          Add an Apartment
          </div>
       </Link>
       :<div className='loader'></div> 
       }
       <div className='mt-2'>
       <p className="text-info">Name: {this.state.firstname.toUpperCase()}  {this.state.lastname.toUpperCase()}</p>
          <p className="text-info">Number:{this.state.number}</p>
          <p className="text-info">Email: {this.state.email}</p>
       </div>
         </div>
      </div>
      </div>
    );
  }
}

export default SideBar
