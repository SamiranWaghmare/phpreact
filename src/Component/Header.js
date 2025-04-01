import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header()
{
return(
    <React.Fragment>
        <nav className="navbar navbar-expand-lg bg-warning">
        <div className="container">

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <NavLink to="/userlist" className="nav-link">User List</NavLink>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    </React.Fragment>
);
}
export default Header;
 