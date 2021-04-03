import React from "react";
import "./App.css";
import Timer from "./timer.js";
import AppContent from "../styles/appcontent.js";
// todos: overlay fix, color fixes, mordernize, change icons, style changes, smaller layout
const App = () => {
  return (
    <AppContent>
      <Timer />
    </AppContent>
  );
};

export default App;
