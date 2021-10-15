import React from "react";
import "./Messages.css";
import { Link } from "react-router-dom";

const Messages = ({ datas }) => {
  return (
    <div className="m-container">
      <div className="header">
        <div className="sidebar-btn"></div>
        <div className="search-div">
          <p>Search</p>
        </div>
      </div>
      <div className="main">
        <ul>
          {datas.map((data) => (
            <Link className="articles" to={`/Messages/${data._id}`}>
              <li>{data.text}</li>
              <hr />
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Messages;
