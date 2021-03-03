import React from "react";
import PropTypes from "prop-types";

const zeroPad = num => {
  return num < 10 ? `0${num}` : `${num}`;
};

const WorkButton = ({ initTime }) => {
  return (
    <div>
      {initTime.get("hours") < 1 ? (
        <h1>
          {" "}
          {`${initTime.get("minutes")}:${zeroPad(
            initTime.get("seconds")
          )}`}{" "}
        </h1>
      ) : (
        <h1>
          {" "}
          {`${initTime.get("hours")}:${zeroPad(
            initTime.get("minutes")
          )}:${zeroPad(initTime.get("seconds"))}`}{" "}
        </h1>
      )}
    </div>
  );
};

WorkButton.propTypes = {
  initTime: PropTypes.object
};

export default WorkButton;
