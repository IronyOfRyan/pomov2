import React, { Component} from "react";
import "./App.css";
import Timer from './timer.js'
import {Jumbotron} from 'react-bootstrap';




class App extends Component{
  constructor(props) {
    super(props);
  }


  render(){
    return(
      <Jumbotron className="jumbotron">
      <div className="App">
          <h1>Pomodoro&ensp;Timer</h1>
          <Timer/>
      </div>
      </Jumbotron>

    );
  }
}



export default App;
