import React from 'react';
import axios from 'axios'

const ApartmentTable =({ id, sn, number, apartment, address}) =>{
 const   handleDel = ()=>{
  axios.delete(`http://localhost:1000/del/apartment/${id}`)
 }
 return(
 <div>
     <table className='table rounded border bg-light'>
     <thead>
          <tr>
            <th scope="col">S/N</th>
            <th scope='col'>Type</th>
            <th scope="col">Number</th>
            <th scope="col">Address</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{sn}</th>
            <td>{apartment}</td>
            <td>{number}</td>
            <td>{address}</td>
            {/* {/* <td>{this.props.number}</td> */}
          </tr>
        </tbody>
     </table>
     <hr/>
     <div className='btn btn-sm btn-danger   mt-2  mb-2 text-center' onClick={handleDel}>Delete</div>
 </div>);
}
export default ApartmentTable;