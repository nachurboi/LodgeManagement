import React, { Component } from 'react'
import MainHeader from "./components/layout/header/MainHeader"
import Footer from "./components/layout/footer/Footer"
import Router from "./route"
import {Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';
import 'tachyons';
import './css/bootstrap.css'

 export default class App extends Component {
  constructor(props){
    super(props)
    this.state={} 
  }
   render(){  

    return (
    <div className=''>
      <Route component ={MainHeader}/>
      <Route component ={Router}/>
      <Route component ={Footer}/>    
    </div>
  );
}
}


