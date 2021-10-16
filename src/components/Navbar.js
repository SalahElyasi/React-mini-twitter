import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Logo from "./Logo.png";

const Navbar = ({ activeuser }) => {
  return (
    <div className="nav-container">
      <div className="row">
        <div className="logo">
          <h2>
            <img
              className="logo"
              src={Logo}
              alt="It's logo."
              title="Logo"
            ></img>
          </h2>
        </div>
        <div className="active-user">
          <h4>User:&nbsp;&nbsp; </h4> {activeuser && <p>{activeuser.name}</p>}
          {/* E_Mail:
          {activeuser && <p>{activeuser.email}</p>} */}
        </div>
        <div className="left">
          <div className="btns">
            <div>
              <Link to="/Messages">Messages</Link>
            </div>
            <div>
              <Link to="/Users">Users</Link>
            </div>

            <div>Login</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
