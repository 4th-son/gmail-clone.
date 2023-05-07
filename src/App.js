import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Mail from "./Mail";
import EmailList from "./EmailList";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />

        <div className="app__body">
          <Sidebar />
          <Switch>
            <Route path="/">
              <EmailList />
            </Route>

            <Route path="/Mail">
              <Mail />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
