import React from 'react'
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div>
             <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
     <Link className="navbar-brand" to="/">Air Asia</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-item nav-link " to="/adminLogin">Admin Login</Link>
          <Link className="nav-item nav-link " to="/userLogin">User Login</Link>
        </div>
      </div>
    </nav>
        </div>
    )
}

export default Nav
