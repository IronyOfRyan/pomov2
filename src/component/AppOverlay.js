import React, { useState, useEffect } from "react";
import TimerInputs from "../view/timerInputs.js";
import WorkTimeDisplay from "../view/timerWorkButton.js";
import { Overlay, Wrapper, Span, ContentHolder } from "../styles/appoverlay.js";
import PropTypes from "prop-types";

const AppOverlay = ({ initTime, setInitTime }) => {
  const [state, setstate] = useState({ style: { width: 0 } });

  useEffect(() => {
    document.addEventListener("click", closeNav);
    document.addEventListener("click", openNav);
    return () => {
      document.removeEventListener("click", closeNav);
      document.removeEventListener("click", openNav);
    };
  }, [state]);

  const openNav = () => {
    const style = { width: 100 + "%" };
    setstate({ style });
  };

  const closeNav = () => {
    const style = { width: 0 };
    setstate({ style });
  };

  const handleChange = ev => {
    const newInitTime = initTime;

    if (ev.target.id === "hours" && ev.target.value <= 4)
      newInitTime
        .subtract(newInitTime.get("hour"), "hours")
        .add(parseInt(ev.target.value, 10), "hours");
    if (ev.target.id === "minutes" && ev.target.value < 60)
      newInitTime
        .subtract(newInitTime.get("minutes"), "minutes")
        .add(parseInt(ev.target.value, 10), "minutes");
    if (ev.target.id === "seconds" && ev.target.value < 60)
      newInitTime
        .subtract(newInitTime.get("seconds"), "seconds")
        .add(parseInt(ev.target.value, 10), "seconds");

    setInitTime(newInitTime);
  };

  const handleKeyPress = event => {
    if (event.key == "Enter") {
      event.preventDefault();
      closeNav();
    }
  };

  return (
    <Wrapper>
      <Span onClick={openNav}>&#9776; Open Settings</Span>
      <Overlay style={state.style}>
        <ContentHolder style={state.style}>
          <h2>Timer Settings</h2>
          <p>How long do you want to work?</p>

          <WorkTimeDisplay initTime={initTime} />
          <TimerInputs
            enterKey={handleKeyPress}
            handleChange={handleChange}
            initTime={initTime}
          />

          <a href="" className="closebtn" onClick={closeNav}>
            Close Settings
          </a>
        </ContentHolder>
      </Overlay>
    </Wrapper>
  );
};

AppOverlay.propTypes = {
  initTime: PropTypes.object,
  setInitTime: PropTypes.func
};

export default AppOverlay;
