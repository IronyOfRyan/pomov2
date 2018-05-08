import React from "react";
import SettingsTimeDisplay from "../styles/settingsTimeDisplay.js";

const zeroPad = num => {
  return num < 10 ? `0${num}` : `${num}`;
};

const WorkButton = props => {
  return (
    <SettingsTimeDisplay>
      {props.initTime.get("hours") < 1 ? (
        <h1>
          {" "}
          {`${props.initTime.get("minutes")}:${zeroPad(
            props.initTime.get("seconds")
          )}`}{" "}
        </h1>
      ) : (
        <h1>
          {" "}
          {`${props.initTime.get("hours")}:${zeroPad(
            props.initTime.get("minutes")
          )}:${zeroPad(props.initTime.get("seconds"))}`}{" "}
        </h1>
      )}
    </SettingsTimeDisplay>
  );
};
export default WorkButton;
