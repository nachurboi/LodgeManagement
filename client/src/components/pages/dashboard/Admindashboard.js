import React,{Component} from 'react';
import './admindashboard.css'
import UserTableList from '../../UserTableList';
import axios from 'axios'

class Admindashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totaluser:[],
      totalapartment:[],
      totalcomplaint:[]
    };
  }
  componentDidMount(){
      axios.get('http://localhost:1000/alluser','http://localhost:1000/allapartment')
      .then(res=>{
        this.setState({totaluser:res.data.info})})
      
        axios.get('http://localhost:1000/allapartment')
        .then(res=>{
          this.setState({totalapartment:res.data.message})

          axios.get('http://localhost:1000/allcomplaint')
        .then(res=>{
          this.setState({totalcomplaint:res.data.info})
        })
        })
  }

  render() {
    return (
      <div className='mt-4 mb-4'>
      <header id='header' className='bg-info pt-2 pb-2'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-10'>
                  <h1 className='text-white'><span class='glyphicon glyphicon-cog'></span> Dashboard <small>Manage Your Resources</small></h1>
                </div>
                <div className='col-md-2'>      
                <div className="dropdown text-info">
        <button className="btn btn-light text-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          More Controls
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" href="#">Delete User</a>
          <a className="dropdown-item" href="#">Delete Apartment</a>
          <a className="dropdown-item" href="#">Delete Comments</a>
        </div>
      </div>
      </div>
              </div>
            </div>
            </header>
            <section id='breadcrumb' className='mt-2'>
              <div className='container'>
                <ol className='breadcrumb'>
                  <li className='active text-info'>Dashboard</li>
                </ol>
              </div>
            </section>
            <section>
              <div className='container-fluid'>
                <div className='row'>
                  <div className='col-md-3'>
                    
      <div className="list-group">
        <a href="#" className="list-group-item list-group-item-action active">
          Dashboard
        </a>
        <span className="glyphicon glyphicon-search" aria-hidden="true"></span><h6 className="list-group-item list-group-item-action">Users: <span className='text-danger'>{this.state.totaluser.length}</span></h6>
        <h6 className="list-group-item list-group-item-action">Apartment: <span className='text-danger'>{this.state.totalapartment.length}</span></h6>
        <h6 className="list-group-item list-group-item-action">Comments: <span className='text-danger'>{this.state.totalcomplaint.length}</span></h6>
      </div>
                  </div>
                  <div className='col-md-6'>
                    
                    <div className="panel panel-default">
                      {/* Default panel contents */}
                      <div className="panel-heading text-danger text-center bg-light" style={{fontSize:'20px'}}>LIST OF REGISTERED USERS</div>
                      <div className="panel-body">
                          <UserTableList/>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-3'><div className="panel-heading text-info text-center bg-light">List Of  Apartments</div></div>
                </div>
              </div>
            </section>

      </div>
    );
  }
}
export default Admindashboard;
