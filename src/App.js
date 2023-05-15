import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Routes, Route } from "react-router-dom";
import Mail from "./Mail";
import EmailList from "./EmailList";
import SendMail from "./SendMail";

function App() {
  return (
    <div className="app">
      <Header />

      <div className="app__body">
        <Sidebar />
        <Routes>
          <Route path="/" element={<EmailList />} />
          <Route />
          <Route path="/Mail" element={<Mail />} />
          <Route />
        </Routes>
        <SendMail />
      </div>
    </div>
  );
}

export default App;
