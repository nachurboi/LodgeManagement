import React, { Component } from 'react'
import Header from "./components/layout/header/header"
import Footer from "./components/layout/footer/Footer"
import Router from "./route"
import {Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';
import 'tachyons';

 export default class App extends Component {
  constructor(props){
    super(props)

    this.state={
     
      
    }
    
  }
  handleAddHouse =(e)=>{
      this.setState(this.state.addhouse.addhouse)

  }




   render(){  
   
    return (


    <div className='overflow-hidden pl-1 pr-1'>
      
      <Route component ={Header}/>
      <Route component ={Router}/>
      <Route component ={Footer}/>    
    </div>
  );
}
}


