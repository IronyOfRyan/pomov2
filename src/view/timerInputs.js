import React, { Component } from "react";

const TimerInputs = props => {
  return (
    <div className="row timerSetup">
      <div className="row control-row">
        <div className="form-group">
          <div className="col-sm-3">
            <label htmlFor="hours">Hours</label>
          </div>
          <div className="col-sm-9">
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
          </div>
        </div>
      </div>
      <div className="row control-row">
        <div className="form-group">
          <div className="col-sm-3">
            <label htmlFor="minutes">Minutes</label>
          </div>
          <div className="col-sm-9">
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
          </div>
        </div>
      </div>
      <div className="row control-row">
        <div className="form-group">
          <div className="col-sm-3">
            <label htmlFor="seconds">Seconds</label>
          </div>
          <div className="col-sm-9">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimerInputs;
