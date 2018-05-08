import React from "react";
import * as timerStates from "../component/timerStates.js";
import { TimerButton, Center } from "../styles/timerStyleButtons.js";

const timerButtons = props => {
  const playPauseButton = props => {
    if (props.timerState === timerStates.DONE)
      return (
        <TimerButton onClick={props.startTimer} disabled>
          Start
        </TimerButton>
      );

    if (props.timerState !== timerStates.RUNNING)
      return <TimerButton onClick={props.startTimer}>Start</TimerButton>;

    if (props.timerState === timerStates.RUNNING)
      return (
        <TimerButton onClick={props.pauseTimer} pause>
          Pause
        </TimerButton>
      );
  };

  return (
    <Center>
      {playPauseButton(props)}
      <TimerButton onClick={props.resetTimer}>Reset</TimerButton>
    </Center>
  );
};
export default timerButtons;
