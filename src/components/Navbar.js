import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ activeuser }) => {
  return (
    <div className="nav-container">
      <div className="row">
        <div className="logo">Logo</div>
        <div className="active-user">
          User:{activeuser && <p>{activeuser.name}</p>}
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
