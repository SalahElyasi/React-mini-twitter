import React, { useState, useEffect } from "react";
import Messages from "./components/Messages";
import Message from "./components/Message";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Users from "./components/Users";
import User from "./components/User";
import "./App.css";
import { Switch, Route } from "react-router-dom";

function App() {
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [activeuser, setActiveUser] = useState([]);

  useEffect(() => {
    getMessages();
    getUsers();
    getActiveUser();
  }, []);

  async function getMessages() {
    const response = await fetch(
      "https://minitwitterbackend.herokuapp.com/messages"
    );
    const messages = await response.json();
    setMessages(messages);
  }
  async function getUsers() {
    const response = await fetch(
      "https://minitwitterbackend.herokuapp.com/users"
    );
    const users = await response.json();
    setUsers(users);
  }
  async function getActiveUser() {
    const response = await fetch("https://minitwitterbackend.herokuapp.com/me");
    const a_user = await response.json();
    setActiveUser(a_user);
  }

  return (
    <div className="container">
      <div className="row1">
        <div className="navbar">
          <Navbar activeuser={activeuser[0]} />
        </div>
      </div>
      <div className="row2">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="messages">
          <Switch>
            <Route exact path="/Users/:id">
              <User datas={users} />
            </Route>
            <Route exact path="/Messages/:id">
              <Message datas={messages} />
            </Route>
            <Route exact path="/Messages">
              <Messages datas={messages} />
            </Route>
            <Route exact path="/Users">
              <Users datas={users} />
            </Route>
            <Route exact path="/">
              <Messages datas={messages} />
            </Route>
          </Switch>
        </div>
      </div>

      <div className="row3">
        <Footer className="footer" />
      </div>
    </div>
  );
}

export default App;
