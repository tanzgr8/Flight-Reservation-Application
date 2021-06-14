import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import AdminLogin from './Components/AdminLogin';
import UserLogin from './Components/UserLogin';
import User from './Components/User';
import Admin from './Components/Admin';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
ReactDOM.render(
<BrowserRouter>
<Switch>
  <Route exact path ="/"><App/></Route>
  <Route exact path ="/userLogin"><UserLogin/></Route>
  <Route exact path ="/adminLogin"><AdminLogin/></Route>
  <Route exact path ="/user"><User/></Route>
  <Route exact path ="/admin"><Admin/></Route>
</Switch>
</BrowserRouter>,document.getElementById("root"));