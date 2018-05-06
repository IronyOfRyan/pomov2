import React, {Component} from 'react';
import {Button, ButtonToolbar} from 'react-bootstrap';
import * as timerStates from '../controls/timerStates.js';


class timerButtons extends Component {
  constructor(){
    super();
  }

  playPauseButton = () => {

    if (this.props.timerState === timerStates.DONE)
      return (
          <Button className="center-block" bsStyle="success" bsSize="large" onClick={this.props.startTimer} disabled>Start</Button>

      )

    if (this.props.timerState !== timerStates.RUNNING)
      return (
          <Button className="center-block" bsStyle="success" bsSize="large" onClick={this.props.startTimer} >Start</Button>

      )

    if (this.props.timerState === timerStates.RUNNING)
      return (
          <Button className="center-block" bsStyle="danger" bsSize="large" onClick={this.props.pauseTimer}>Pause</Button>
      )

  }


  render(){
    return (
      <div>
        <ButtonToolbar>
          {this.playPauseButton()}
          <Button className="center-block" bsStyle="success" bsSize="large" onClick={this.props.resetTimer}>Reset</Button>
        </ButtonToolbar>
      </div>
    );
  }

}
export default timerButtons
