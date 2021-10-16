import React from "react";
import { Link } from "react-router-dom";
import "./Messages.css";

const Users = ({ datas }) => {
  return (
    <div className="m-container">
      <div className="header">
        <div className="sidebar-btn">{/* <p>s</p> */}</div>
        <div className="search-div">
          <p>Search:</p>
        </div>
      </div>
      <div className="main">
        <ul>
          {datas.map((data) => (
            <Link className="user_data" to={`/Users/${data._id}`}>
              <li className="name">{data.name}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Users;
