import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'

function App() {
  return (
   <>
    <div className="container ct" > 
      <div className="row">
        <div className="col-sm-6">
    <Link className="btn btn-success btn-lg" role="button" to="/adminLogin">
            Admin Login
            </Link>
            </div>
            <div className="col-sm-6">
    <Link className="btn btn-success btn-lg" role="button" to="/UserLogin">
        User Login <i className="arrow right icon "></i>
      </Link>
      </div>
      </div>
       </div>
   </>
  )
}

export default App

