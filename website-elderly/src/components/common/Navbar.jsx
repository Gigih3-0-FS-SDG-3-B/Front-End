import React from "react";

class Navbar extends React.Component {
    render() {
        return(
          <div className="navbar bg-base-100">
          <div className="navbar-start">
            <a className="btn btn-ghost normal-case text-xl text-primary">FindCare</a>
          </div>
          <div className="navbar-end">
            <ul className="menu menu-horizontal px-1 mr-4">
              <li><a>About</a></li>
              <li><a>Find Caregiver</a></li>
              <li><a>Become Cargiver</a></li>
            </ul>
            <a className="btn btn-outline btn-primary mr-4">Login</a>
            <a className="btn btn-active btn-primary">Register</a>
          </div>
        </div>
        );
    }
}

export default Navbar;