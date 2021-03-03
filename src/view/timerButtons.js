import React from "react";
import * as timerStates from "../component/timerStates.js";
import { TimerButton, Center } from "../styles/timerStyleButtons.js";
import PropTypes from "prop-types";

const timerButtons = ({ timerState, startTimer, pauseTimer, resetTimer }) => {
  const playPauseButton = () => {
    if (timerState == timerStates.DONE)
      return (
        <TimerButton onClick={startTimer} disabled>
          Start
        </TimerButton>
      );

    if (timerState != timerStates.RUNNING)
      return <TimerButton onClick={startTimer}>Start</TimerButton>;

    if (timerState == timerStates.RUNNING)
      return (
        <TimerButton onClick={pauseTimer} pause>
          Pause
        </TimerButton>
      );
  };

  return (
    <Center>
      {playPauseButton()}
      <TimerButton onClick={resetTimer}>Reset</TimerButton>
    </Center>
  );
};

timerButtons.propTypes = {
  timerState: PropTypes.number,
  startTimer: PropTypes.func,
  pauseTimer: PropTypes.func,
  resetTimer: PropTypes.func
};

export default timerButtons;
