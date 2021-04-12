import React from "react";
import "./App.css";
import Timer from "./timer.js";
import AppContent from "../styles/appcontent.js";
// todos: overlay fix/changes?, color fixes, update icons, better styling of components, smaller stopclock
const App = () => {
  return (
    <AppContent>
      <Timer />
    </AppContent>
  );
};

export default App;
