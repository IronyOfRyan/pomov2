import React, { Component} from "react";
import AppButton from './Button.js'
import {ButtonGroup} from 'react-bootstrap'
const {timerStop, countDown} = require('../controls/timerInit.js');
const {play} = require('../controls/timerController.js')

class Timer extends Component{
  constructor(props){
    super(props)
    this.state = {
      started: false,
      minutes: 25,
      seconds: 0,
      interval:null
    }

  }
  zeroPad = (num) => {
      return (num < 10) ? "0" + num : num;
  }

  handleClick = (e) => {
    e.preventDefault();

    console.log('Button clicked');
  }



  render(){

    return(
      <div className="timer">
        <div className = "timerDisplay">{this.zeroPad(this.state.minutes)}:{this.zeroPad(this.state.seconds)}</div>
        <ButtonGroup>
          <AppButton label="Play" handleClick={this.handleClick}/>
          <AppButton label="Pause" />
          <AppButton label="Stop" />
        </ButtonGroup>
      </div>
    );

  }
}

export default Timer;
