import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'

function App() {
  return (
   <>
   <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Air Asia</h1>
    <p class="lead">Book your Tickets Here</p>
  </div>
</div>
    <div className="container ct" > 
      <div className="row">
        <div className="col-sm-6">
    <Link className="btn btn-success btn-lg zz" role="button" to="/adminLogin">
    <i className="arrow left icon "></i> Admin Login
            </Link>
            </div>
            <div className="col-sm-6">
    <Link className="btn btn-success btn-lg zz" role="button" to="/UserLogin">
        User Login <i className="arrow right icon "></i>
      </Link>
      </div>
      </div>
       </div>
   </>
  )
}

export default App

