import React from "react";
import {
  NumberForms,
  SingleForm,
  NumberInput,
  Label
} from "../styles/settingsNumberForm";

const TimerInputs = props => {
  return (
    <NumberForms>
      <SingleForm>
        <Label>
          <label htmlFor="hours">Hours</label>
        </Label>
        <NumberInput>
          <input
            id="hours"
            className="form-control"
            type="number"
            max="4"
            min="0"
            tabIndex="0"
            step="1"
            onKeyDown={props.enterKey}
            defaultValue={props.initTime.get("hours")}
            onChange={props.handleChange}
            onInput={e => {
              e.target.value = Math.max(0, parseInt(e.target.value))
                .toString()
                .slice(0, 1);
            }}
          />
        </NumberInput>
      </SingleForm>
      <SingleForm>
        <Label>
          <label htmlFor="minutes">Minutes</label>
        </Label>
        <NumberInput>
          <input
            id="minutes"
            className="form-control"
            max="59"
            min="15"
            type="number"
            tabIndex="0"
            step="1"
            onKeyDown={props.enterKey}
            defaultValue={props.initTime.get("minutes")}
            onChange={props.handleChange}
            onInput={e => {
              e.target.value = Math.max(0, parseInt(e.target.value))
                .toString()
                .slice(0, 2);
            }}
          />
        </NumberInput>
      </SingleForm>
      <SingleForm>
        <Label>
          <label htmlFor="seconds">Seconds</label>
        </Label>
        <NumberInput>
          <input
            id="seconds"
            className="form-control"
            type="number"
            max="59"
            min="0"
            tabIndex="0"
            step="1"
            onKeyDown={props.enterKey}
            defaultValue={props.initTime.get("seconds")}
            onChange={props.handleChange}
            onInput={e => {
              e.target.value = Math.max(0, parseInt(e.target.value))
                .toString()
                .slice(0, 2);
            }}
          />
        </NumberInput>
      </SingleForm>
    </NumberForms>
  );
};

export default TimerInputs;
