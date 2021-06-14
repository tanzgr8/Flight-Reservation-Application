import React from 'react'
import { Link } from 'react-router-dom';
function UserLogin() {
    return (
        <div>
            <h1>Hello UserLogin</h1>
            <Link className="btn btn-success btn-lg" role="button" to="/user">
          Got to User
            </Link>
        </div>
    )
}

export default UserLogin
