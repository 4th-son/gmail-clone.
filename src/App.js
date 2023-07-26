import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Routes, Route } from "react-router-dom";
import Mail from "./Mail";
import EmailList from "./EmailList";
import SendMail from "./SendMail";
import { useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./features/mailSlice";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleOpenSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  return (
    <div className="app container min-h-screen min-w-full">
      <Header handleOpenSidebar={handleOpenSidebar} />

      <div className="app__body flex relative">
        {/* <Sidebar isSidebarOpen={isSidebarOpen} /> */}
        {isSidebarOpen && <Sidebar />}
        <Routes>
          <Route path="/" element={<EmailList />} />
          <Route />
          <Route path="/Mail" element={<Mail />} />
          <Route />
        </Routes>
        {sendMessageIsOpen && <SendMail />}
      </div>
    </div>
  );
}

export default App;
