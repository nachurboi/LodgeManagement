import React,{Component} from 'react';
import axios from 'axios'

 export default class profileCard extends Component {
 constructor(props) {
  super(props);
  this.state = {
    alluser:''

  };
 }
 componentWillMount(){
//   axios.get('http://localhost:1000/alluser')
//  .then(res=>{
//    this.setState({alluser:res.data.info})
//    console.log(this.state.alluser)
   
//   })
}

 render() {
  return (
   <div>
       <div className=" grow tc bg-light-green dib br3 ma2 " style={{width: '18rem'}}>
  
  <img src='' className="card-img-top" alt="img" />
      <div className="card-body">
    {/* <p>City: {city}</p> */}
    {/* <p>Adress: {address}</p> */}
    {/* <p>Contacts: {phonenumber}</p> */}
        {/* <Link to="" className="btn btn-info btn-block">View more...</Link> */}
      </div>
</div>
   </div>
  );
  }
 }