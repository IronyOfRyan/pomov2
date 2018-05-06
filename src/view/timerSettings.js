import React, { Component } from 'react';

const TimerSettings = (props) => {

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
                defaultValue={props.initTime.get('hours')}
                onChange={props.handleChange}
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
                type="number"

                defaultValue={props.initTime.get('minutes')}
                onChange={props.handleChange}
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
                defaultValue={props.initTime.get('seconds')}
                onChange={props.handleChange}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }


export default TimerSettings;
