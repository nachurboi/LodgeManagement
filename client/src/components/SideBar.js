import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class SideBar extends Component {
  constructor(props, ...rest) {
    super(props, ...rest);
    this.state = {
      username:''
    };
  }

    componentDidMount(){
      const token = window.localStorage.getItem("token");
      if(token){
        let username = window.localStorage.getItem("firstname");
        this.setState({username:username})

      }else{

        // this.props.history.push('/landingpage')

      }
     
     
    }

  render() {
    return (
      <div>
        <div className="card text-center m-3 bg-light" style={{width: '18rem'}}>
         <div className='card-header text-white bg-secondary text-center shadow'>Welcome,{this.state.username.toUpperCase()}</div>
         <div className='card-body'>
         <div className='m-3'> <img src="" className="card-img-top" alt="" /></div>
        
       <div className='btn btn-info text-white btn-block grow'> <Link className='text-white' to='/addhouse'> Add an Apartment</Link></div> 
         <div className='btn btn-info text-white grow btn-block '> View Apartments</div>
         <div className='btn btn-info text-white grow btn-block '>Profile</div>
        <div className='card-footer'></div>
         </div>
      </div>
      </div>
    );
  }
}

export default SideBar
