import React, { Component} from "react";
import moment from 'moment';
import TimerHeader from '../view/timerHeader.js';
import TimerDisplay from '../view/timerDisplay.js';
import TimerButtons from '../view/timerButtons.js';
import TimerModeButtons from '../view/timerModes.js';
import * as timerStates from '../controls/timerStates.js';
import start from '../sounds/start.mp3';
import pause from '../sounds/pause.mp3';
import reset from '../sounds/stop.mp3';
import end from '../sounds/alarm-buzzer.mp3';


class Timer extends Component{
  constructor(props){
    super(props);
    this.state = {
      audioList: {},
      work: 25,
      break: 5,
      currentTime: moment.duration(25, 'minutes'),
      initTime: moment.duration(25, 'minutes'),
      breakTime: moment.duration(5, 'minutes'),
      timerState: timerStates.INIT,
      interval: null,
    }

    this.start = new Audio(start);
    this.pause = new Audio(pause);
    this.reset = new Audio(reset);
    this.end = new Audio(end);
  }


  setInitTime = (newInitTime) => {

    this.setState({
      initTime: newInitTime,
      currentTime: newInitTime,

    })
  }

  swapTimer = () => {
    clearInterval(this.state.interval)

    this.setState({
      timerState: timerStates.INIT,
      currentTime: moment.duration(5, 'minutes'),
      initTime: moment.duration(5, 'minutes'),
      interval:null,
    })
  }

  startTimer = () => {
    if (this.state.interval) clearInterval(this.state.interval)
    if (this.state.timerState === timerStates.DONE) return

    this.setState({
      timerState: timerStates.RUNNING,
      interval: setInterval(this.reduceTimer, 1000)
    })
    this.start.play();
  }

  noZeroTimer = () => {
      if (this.state.currentTime.get('hours') === 0
        && this.state.currentTime.get('minutes') === 0
        && this.state.currentTime.get('seconds') === 0){
        return;
        }
    }

  reduceTimer = () => {
    if (this.state.currentTime.get('hours') === 0
      && this.state.currentTime.get('minutes') === 0
      && this.state.currentTime.get('seconds') === 0){
      this.completeTimer();
      return;
      }

    const newTime = moment.duration(this.state.currentTime);
    newTime.subtract(1, 'second');
    this.setState({
      currentTime: newTime,
    })
  }

  pauseTimer = () => {
    if (this.state.interval) clearInterval(this.state.interval)
    this.pause.play();
    this.setState({
      timerState: timerStates.PAUSE,
    })
  }

  completeTimer = () => {
    this.setState({
      timerState: timerStates.DONE,
      interval:null,
    })
  }

  resetTimer = () => {
    clearInterval(this.state.interval)
    this.reset.play();
    this.setState({
      currentTime: moment.duration(25, 'minutes'),
      initTime: moment.duration(25, 'minutes'),
      timerState: timerStates.INIT,
      interval: null,
    })
  }

  render(){

    return(
      <div className="container-fluid">
        <TimerHeader />
        <TimerModeButtons
          resetTimer={this.resetTimer}
          swapTimer={this.swapTimer}
          workTime={this.state.work}
          breakTime={this.state.break}
          initTime={this.state.initTime}
          setInitTime={this.setInitTime}
          timerState={this.state.timerState}
        />

        <TimerDisplay currentTime={this.state.currentTime} timerState={this.state.timerState}/>
        <TimerButtons
        startTimer={this.startTimer}
        timerState={this.state.timerState}
        pauseTimer={this.pauseTimer}
        resetTimer={this.resetTimer}
        />
      </div>
    );

  }
}

export default Timer;
