import React from "react";
import "./Messages.css";
import { Link } from "react-router-dom";
import Message from "./Message";

const Messages = ({ datas }) => {
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
            <Link to={`/Messages/${data._id}`}>
              <li>{data.text}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Messages;
