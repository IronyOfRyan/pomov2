import React from 'react';
import {Button, ButtonToolbar} from 'react-bootstrap/lib/';
import * as timerStates from '../controls/timerStates.js';


const timerButtons = (props) => {

  const playPauseButton = (props) => {

    if (props.timerState === timerStates.DONE)
      return (
          <Button className="center-block" bsStyle="success" bsSize="large" onClick={props.startTimer} disabled>Start</Button>

      )

    if (props.timerState !== timerStates.RUNNING)
      return (
          <Button className="center-block" bsStyle="success" bsSize="large" onClick={props.startTimer} >Start</Button>

      )

    if (props.timerState === timerStates.RUNNING)
      return (
          <Button className="center-block" bsStyle="danger" bsSize="large" onClick={props.pauseTimer}>Pause</Button>
      )

  }


    return (
      <div>
        <ButtonToolbar>
          {playPauseButton(props)}
          <Button className="center-block" bsStyle="success" bsSize="large" onClick={props.resetTimer}>Reset</Button>
        </ButtonToolbar>
      </div>
    );


}
export default timerButtons
