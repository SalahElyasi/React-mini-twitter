import React, { useState, useEffect } from "react";
import "./Messages.css";

const Messages = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    const response = await fetch(
      "https://minitwitterbackend.herokuapp.com/messages"
    );
    const users = await response.json();
    setUsers(users);
  }

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
          {users.map((user) => (
            <li>{user._id}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Messages;
