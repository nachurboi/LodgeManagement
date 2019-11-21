import React, { Component } from 'react'
import Header from "./components/layout/header/header"
import Footer from "./components/layout/footer/Footer"
import Router from "./route"
import {Route, Swicth} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';
import 'tachyons';
import Contact from './components/contact-card/ContactCard'
import VisionCard from './components/VisionCard'

 export default class App extends Component {
  constructor(props){
    super(props)

    this.state={
      contact: false,
      vision: true
      
    }
    this.handleToggle = this.handleToggle.bind(this) 
  }
   handleToggle = () =>{
   const {contact,vision} = this.state;

  this.setState( {contact:!contact && <Contact contact={this.state.contact}/>})
  this.setState({vision:!vision && <VisionCard  vision ={ this.state.vision}/>})

  }



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


