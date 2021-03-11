import React, { useEffect } from "react";
import * as timerStates from "../component/timerStates.js";
import { TimerBox, TimerCountDown } from "../styles/timerbox.js";
import PropTypes from "prop-types";

// Function that adds the extra 0 in when numbers are single digits
const zeroPad = num => {
  return num < 10 ? `0${num}` : `${num}`;
};

const timerDisplay = ({ currentTime }) => {
  return (
    <TimerBox>
      {/* Hide the hour element if time is below 60 minutes. */}
      {currentTime.get("hours") < 1 ? (
        <TimerCountDown>
          {" "}
          {`${zeroPad(currentTime.get("minutes"))}:${zeroPad(
            currentTime.get("seconds")
          )}`}{" "}
        </TimerCountDown>
      ) : (
        <TimerCountDown>
          {" "}
          {`${currentTime.get("hours")}:${zeroPad(
            currentTime.get("minutes")
          )}:${zeroPad(currentTime.get("seconds"))}`}{" "}
        </TimerCountDown>
      )}
    </TimerBox>
  );
};

timerDisplay.propTypes = {
  currentTime: PropTypes.object
};

export default timerDisplay;
