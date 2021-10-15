import React from "react";
import Messages from "./components/Messages";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="row1">
        <Navbar className="navbar" />
      </div>
      <div className="row2">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="messages">
          <Messages />
        </div>
      </div>
      <div className="row3">
        <Footer className="footer" />
      </div>
    </div>
  );
}

export default App;
