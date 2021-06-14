import React from 'react'
import { Link } from 'react-router-dom';

function AdminLogin() {
    return (
        <div>
            <h1>Hemmloo Admin</h1>
            <Link className="btn btn-success btn-lg" role="button" to="/admin">
          Got to admin
            </Link>
        </div>
    )
}

export default AdminLogin
