import React, { Component } from 'react'
import Taiye from '../../../assets/img/Taiye.jpg'



export default class Contacts extends Component {
  
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='mt-5'>
         <div className='' style={{}}>
      <div className="card m-auto bg-info mt-5" style={{width: '18rem'}}>
         <div className="card-body ">
           <h2 className="card-title text-white border-bottom border-dark ">Contact Admin</h2>
           <div>
        <div>
        <img src={Taiye} width='100px' height="100px" className='rounded shadow-xl mb-2' alt=''/>
        <p  className='text-white'> Taiwo Hassan Ebietanmi</p>
        <p><em className='text-white'>+2348136477300</em></p>
        <p><em  className='text-white'>nachurboi@gmail.com</em></p>
        </div>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
        View More Contacts...
        </button>
        {/* Modal */}
        <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">Contact list</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                ...
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                {/* <button type="button" className="btn btn-primary">Save changes</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
         </div>
       </div>
    </div>
   
      </div>
    );
  }

}

Contacts.propTypes = {};
