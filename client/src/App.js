import React, { Component } from 'react'
import Header from "./components/layout/header/header"
import Footer from "./components/layout/footer/Footer"
import Router from "./route"
import {Route, Swicth} from "react-router-dom"
// import './App.css'
import 'tachyons';

 class App  extends Component {

   render(){  
   
    return (


    <div>
      
      <Route component ={Header}/>
      <Route component ={Router}/>
      <Route component ={Footer}/>    
    </div>
  );
}
}
export default App

