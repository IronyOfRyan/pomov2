import React from "react";
import PropTypes from "prop-types";

const zeroPad = num => {
  return num < 10 ? `0${num}` : `${num}`;
};

const WorkButton = props => {
  return (
    <div>
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
    </div>
  );
};

WorkButton.propTypes = {
  initTime: PropTypes.object
};

export default WorkButton;
