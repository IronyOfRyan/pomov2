import React from "react";
import PropTypes from "prop-types";
import {
  NumberForms,
  Form,
  Label,
  NumberInput
} from "../styles/settingsNumberForm";

const TimerInputs = ({ enterKey, initTime, handleChange }) => {
  return (
    <NumberForms>
      <Form>
        <Label htmlFor="hours">Hours</Label>
        <NumberInput
          id="hours"
          type="number"
          max="4"
          min="0"
          tabIndex="0"
          step="1"
          onKeyDown={enterKey}
          defaultValue={initTime.get("hours")}
          onChange={handleChange}
          onInput={e => {
            e.target.value = Math.max(0, parseInt(e.target.value))
              .toString()
              .slice(0, 1);
          }}
        />
      </Form>
      <Form>
        <Label htmlFor="minutes">Minutes</Label>
        <NumberInput
          id="minutes"
          max="59"
          min="0"
          type="number"
          tabIndex="0"
          step="1"
          onKeyDown={enterKey}
          defaultValue={initTime.get("minutes")}
          onChange={handleChange}
          onInput={e => {
            e.target.value = Math.max(0, parseInt(e.target.value))
              .toString()
              .slice(0, 2);
          }}
        />
      </Form>
      <Form>
        <Label htmlFor="seconds">Seconds</Label>
        <NumberInput
          id="seconds"
          type="number"
          max="59"
          min="0"
          tabIndex="0"
          step="1"
          onKeyDown={enterKey}
          defaultValue={initTime.get("seconds")}
          onChange={handleChange}
          onInput={e => {
            e.target.value = Math.max(0, parseInt(e.target.value))
              .toString()
              .slice(0, 2);
          }}
        />
      </Form>
    </NumberForms>
  );
};

TimerInputs.propTypes = {
  enterKey: PropTypes.func,
  initTime: PropTypes.object,
  handleChange: PropTypes.func
};

export default TimerInputs;
