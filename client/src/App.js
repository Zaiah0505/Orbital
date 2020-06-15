import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from "react";
import { ModuleSelectionPage } from "./Pages/Module Selection Page/ModuleSelectionPage"
import { LoginPage } from './Pages/Login/LoginPage'
//import "./App.scss";
import {
  Switch,
  Route,
} from "react-router-dom";
import { PrivateNav } from "./navbar";
import  ModulePlannerPageTemp  from "./Pages/Module Planner Page/ModulePlannerPage";
import { CAPCalculatorPage } from "./Pages/CAP Calculator Page/CAPCalculatorPage";
import FirstSetting from './Pages/Login/FirstSetting';

import PrivateRoute from './Components/PrivateRoute';
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import Landing from "./Pages/Login/Landing"
import RegisterTemp from "./Components/auth/Register";
import LoginTemp from "./Components/auth/Login";
import PrivateRouteTemp from "./Components/PrivateRoute";
import Dashboard from "./Components/dashboard/Dashboard";

import store from './store';

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./";
  }
}

let totalGEMMCs = 0;

class App extends React.Component {
  
  render() {
       return (
         <div>
          <PrivateNav />

          <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/login" component={LoginPage} />
            <PrivateRouteTemp 
              exact path="/dashboard" 
              component={Dashboard} />

            <PrivateRouteTemp 
                exact path="/select-modules" 
                component={ModuleSelectionPage} />

            <PrivateRouteTemp 
                exact path="/module-planner" 
                component={ModulePlannerPageTemp} />

            <PrivateRouteTemp 
                exact path="/cap-calculator" 
                component={CAPCalculatorPage} /> 

            <PrivateRouteTemp 
                exact path="/first-setting" 
                component={FirstSetting} /> 

            <Route component={() => <div className="display-2"><strong>404 NOT FOUND</strong></div>}/>
          </Switch>

           </div>

   );
    }
}



export default App;




