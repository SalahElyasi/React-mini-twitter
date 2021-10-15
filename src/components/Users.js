import React from "react";
import { Link } from "react-router-dom";

const Users = ({ datas }) => {
  return (
    <div className="m-container">
      <div className="header">
        <div className="sidebar-btn">
          <p>s</p>
        </div>
        <div className="search-div">
          <p>Search</p>
        </div>
      </div>
      <div className="main">
        <ul>
          {datas.map((data) => (
            <Link>
              <li>{data.name}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Users;
