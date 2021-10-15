import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="row">
        <div className="logo">Logo</div>
        <div className="active-user">Active User</div>
        <div className="left">
          <div className="btns">
            <div>Messages</div>
            <div>Users</div>
            <div>Login</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
