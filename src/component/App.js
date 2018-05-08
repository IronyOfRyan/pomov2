import React, { Component } from "react";
import "./App.css";
import Timer from "./timer.js";
import AppContent from "../styles/appcontent.js";

class App extends Component {
  render() {
    return (
      <AppContent>
        <Timer />
      </AppContent>
    );
  }
}

export default App;
