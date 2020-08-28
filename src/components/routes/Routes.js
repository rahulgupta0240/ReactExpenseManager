import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import Login from "../authentication/Login/Login";
import Register from "../authentication/Register/Register";
import { NotFound } from "../shared/notFound/notFound";
import Navbar from "../dashboard/navigation/Navbar/Navbar";
import DashboardContainer from "../dashboard/DashboardContainer/DashboardContainer";

export const Routes = ()=> {
  const Header =   (window.location.pathname === '/Login' || window.location.pathname === '/Register' ) ? null : < Navbar />;
 
  return (
    <div>
      {Header} 
    <Router>
        <Switch>
        <Route exact path="/" >
            <Redirect to ='/Login' component={Login}/>
          </Route>
          <Route path="/Login"  component={Login} />
           
           
          <Route path="/Register"  component={Register} />
           
          <Route path="/Dashboard"  component={DashboardContainer} />
           
        
         <Route path="/*">
          <NotFound />
          </Route>
        </Switch>
   
    </Router>
    </div>
  );
}
