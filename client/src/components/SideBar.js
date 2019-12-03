import React,{Component} from 'react';

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
        this.props.history.push('landingpage')
      }
     
     
    }

  render() {
    return (
      <div>
        <div className="card text-center m-3 bg-light" style={{width: '18rem'}}>
         <div className='card-header text-white bg-primary text-center shadow'>Welcome,{this.state.username}</div>
         <div className='card-body'>
         <div className='m-3'> <img src="..." className="card-img-top" alt=" image-here" /></div>
        
         <div className='btn btn-info text-white btn-block grow'>Add an Apartment</div>
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
