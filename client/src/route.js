import React, { Component } from 'react'
import {Route, Switch} from "react-router-dom"
import LandingPage from "./components/pages/landingPage/landingPage"
import Login from './components/pages/Authenticate/Login.jsx'
import Dashboard from './components/pages/dashboard/dashboard';
import Signup from './components/pages/Authenticate/Signup';
import Gallery from './components/pages/gallery/Gallery.jsx';

export default class Router extends Component {

 render() {
  return (
   <div>

    <Switch>

        <Route path="/" strict exact ={true} component={LandingPage}/>

        <Route path ="/landingpage" strict exact={true} component={LandingPage}/>

        <Route path="/login" strict exact ={true} component={Login}/>

        <Route path="/signup" strict exact ={true} component={Signup}/>

        <Route path="/home" strict exact ={true} component={Dashboard}/>

        <Route path="/register" strict exact={true} component={Signup}/>

        <Route path="/gallery" strict exact={true} component ={Gallery}/>
        

    </Switch>
   </div>
  );
 }
}

Router.propTypes = {};
