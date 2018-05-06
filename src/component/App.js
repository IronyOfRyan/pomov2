import React, { Component} from "react";
import "./App.css";
import Timer from './timer.js';
import {Panel} from 'react-bootstrap';
import Test from './AppOverlay.js';



class App extends Component{

  render(){
    return(
      <Panel>
        <Panel.Body className="app-content center-block">
          <Timer />

        </Panel.Body>
      </Panel>

    );
  }
}



export default App;
