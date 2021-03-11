import React, { useState, useEffect } from "react";
import moment from "moment";
import TimerDisplay from "../view/timerDisplay.js";
import TimerButtons from "../view/timerButtons.js";
import * as timerStates from "../component/timerStates.js";
import { start, pause, reset, end } from "../sounds/sounds.js";
import AppOverlay from "./AppOverlay.js";
import AppContent from "../styles/appcontent.js";
import PropTypes from "prop-types";

const Timer = () => {
  const [state, setstate] = useState({
    currentTime: moment.duration(25, "minutes"),
    initTime: moment.duration(25, "minutes"),
    timerState: timerStates.INIT,
    interval: null
  });

  // useEffect(() => {
  //   if (state.timerState == 1) {
  //     setstate((prevState) => ({
  //       ...prevState,
  //       interval: setInterval(reduceTimer, 1000),
  //     }));
  //   }
  // }, [state.currentTime]);

  const setInitTime = newInitTime => {
    setstate(prevState => ({
      ...prevState,
      initTime: newInitTime,
      currentTime: newInitTime
    }));
  };

  const swapTimer = () => {
    clearInterval(state.interval);

    setstate({
      timerState: timerStates.INIT,
      currentTime: moment.duration(5, "minutes"),
      initTime: moment.duration(5, "minutes"),
      interval: null
    });
  };

  const startTimer = () => {
    if (state.interval) clearInterval(state.interval);
    if (state.timerState === timerStates.DONE) return;

    setstate(prevState => ({
      ...prevState,
      timerState: timerStates.RUNNING,
      interval: setInterval(reduceTimer, 1000)
    }));
    start.play();
  };

  const noZeroTimer = () => {
    if (
      state.currentTime.get("hours") === 0 &&
      state.currentTime.get("minutes") === 0 &&
      state.currentTime.get("seconds") === 0
    ) {
      end.play();
      return;
    }
  };

  const reduceTimer = () => {
    if (
      state.currentTime.get("hours") === 0 &&
      state.currentTime.get("minutes") === 0 &&
      state.currentTime.get("seconds") === 0
    ) {
      clearInterval(state.interval);
      completeTimer();
      return;
    }

    const newTime = moment.duration(state.currentTime);
    newTime.subtract(1, "second");
    setstate(prevState => ({
      ...prevState,
      currentTime: newTime
    }));
  };

  const pauseTimer = () => {
    if (state.interval) clearInterval(state.interval);
    pause.play();
    setstate(prevState => ({
      ...prevState,
      timerState: timerStates.PAUSE
    }));
  };

  const completeTimer = () => {
    setstate(prevState => ({
      ...prevState,
      timerState: timerStates.DONE,
      interval: null
    }));
  };

  const resetTimer = () => {
    clearInterval(state.interval);
    reset.play();
    setstate({
      currentTime: moment.duration(25, "minutes"),
      initTime: moment.duration(25, "minutes"),
      timerState: timerStates.INIT,
      interval: null
    });
  };

  return (
    <div>
      <TimerDisplay currentTime={state.currentTime} />
      <TimerButtons
        startTimer={startTimer}
        timerState={state.timerState}
        pauseTimer={pauseTimer}
        resetTimer={resetTimer}
      />
      <AppOverlay
        initTime={state.initTime}
        setInitTime={setInitTime}
        timerState={state.timerState}
      />
    </div>
  );
};

export default Timer;
