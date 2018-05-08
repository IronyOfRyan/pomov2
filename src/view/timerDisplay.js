import React from "react";
import * as timerStates from "../component/timerStates.js";
import TimerBox from "../styles/timerbox.js";

// Function that adds the extra 0 in when numbers are single digits
const zeroPad = num => {
  return num < 10 ? `0${num}` : `${num}`;
};

const timerDisplay = props => (
  <TimerBox>
    {/* Hide the hour element if time is below 60 minutes. */}
    {props.currentTime.get("hours") < 1 ? (
      <h2>
        {" "}
        {`${zeroPad(props.currentTime.get("minutes"))}:${zeroPad(
          props.currentTime.get("seconds")
        )}`}{" "}
      </h2>
    ) : (
      <h2>
        {" "}
        {`${props.currentTime.get("hours")}:${zeroPad(
          props.currentTime.get("minutes")
        )}:${zeroPad(props.currentTime.get("seconds"))}`}{" "}
      </h2>
    )}
  </TimerBox>
);

export default timerDisplay;
