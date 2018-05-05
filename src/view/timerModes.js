import React, {Component} from 'react';
import {Button, ButtonToolbar} from 'react-bootstrap';
import * as timerStates from '../controls/timerStates.js';


class TimerModeButtons extends Component {
  constructor(){
    super();
  }


  render(){
    return (
      <div>
        <ButtonToolbar>
          <Button className="center-block" bsStyle="success" bsSize="large" onClick={this.props.resetTimer}>Work:  {`${this.props.displayTime}`} mins</Button>
          <Button className="center-block" bsStyle="success" bsSize="large" onClick={this.props.swapTimer}>Break</Button>
        </ButtonToolbar>
      </div>
    );
  }

}
export default TimerModeButtons
