import React, { Component } from "react";
import moment from "moment";
import TimerDisplay from "../view/timerDisplay.js";
import TimerButtons from "../view/timerButtons.js";
import * as timerStates from "../component/timerStates.js";
import { Center } from "../styles/timerStyleButtons.js";
import { start, pause, reset, end } from "../sounds/sounds.js";
import AppOverlay from "./AppOverlay.js";
import PropTypes from "prop-types";

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      currentTime: moment.duration(25, "minutes"),
      initTime: moment.duration(25, "minutes"),
      timerState: timerStates.INIT,
      interval: null
    };
  }

  setInitTime = newInitTime => {
    this.setState({
      initTime: newInitTime,
      currentTime: newInitTime
    });
  };

  swapTimer = () => {
    clearInterval(this.state.interval);

    this.setState({
      timerState: timerStates.INIT,
      currentTime: moment.duration(5, "minutes"),
      initTime: moment.duration(5, "minutes"),
      interval: null
    });
  };

  startTimer = () => {
    if (this.state.interval) clearInterval(this.state.interval);
    if (this.state.timerState === timerStates.DONE) return;

    this.setState({
      timerState: timerStates.RUNNING,
      interval: setInterval(this.reduceTimer, 1000)
    });
    start.play();
  };

  noZeroTimer = () => {
    if (
      this.state.currentTime.get("hours") === 0 &&
      this.state.currentTime.get("minutes") === 0 &&
      this.state.currentTime.get("seconds") === 0
    ) {
      end.play();
      return;
    }
  };

  reduceTimer = () => {
    if (
      this.state.currentTime.get("hours") === 0 &&
      this.state.currentTime.get("minutes") === 0 &&
      this.state.currentTime.get("seconds") === 0
    ) {
      clearInterval(this.state.interval);
      this.completeTimer();
      return;
    }

    const newTime = moment.duration(this.state.currentTime);
    newTime.subtract(1, "second");
    this.setState({
      currentTime: newTime
    });
  };

  pauseTimer = () => {
    if (this.state.interval) clearInterval(this.state.interval);
    pause.play();
    this.setState({
      timerState: timerStates.PAUSE
    });
  };

  completeTimer = () => {
    this.setState({
      timerState: timerStates.DONE,
      interval: null
    });
  };

  resetTimer = () => {
    clearInterval(this.state.interval);
    reset.play();
    this.setState({
      currentTime: moment.duration(25, "minutes"),
      initTime: moment.duration(25, "minutes"),
      timerState: timerStates.INIT,
      interval: null
    });
  };

  render() {
    return (
      <div>
        <TimerDisplay
          currentTime={this.state.currentTime}
          timerState={this.state.timerState}
        />
        <TimerButtons
          startTimer={this.startTimer}
          timerState={this.state.timerState}
          pauseTimer={this.pauseTimer}
          resetTimer={this.resetTimer}
        />
        <AppOverlay
          initTime={this.state.initTime}
          setInitTime={this.setInitTime}
          timerState={this.state.timerState}
        />
      </div>
    );
  }
}

export default Timer;
