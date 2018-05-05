import React, {Component} from 'react';
import {Button, ButtonToolbar} from 'react-bootstrap';
import * as timerStates from '../controls/timerStates.js';
import moment from 'moment';

class TimerIncrements extends Component {
  constructor(){
    super();
  }

  handleChange = ev => {
    const newInitTime = this.props.initTime;
    if(this.props.timerState === timerStates.RUNNING) return
    if(ev.target.id === 'minus' && newInitTime > 0) newInitTime.subtract(parseInt(5, 10), 'minutes');
    if(ev.target.id === 'plus') newInitTime.add(parseInt(5, 10), 'minutes')

    this.props.setInitTime(newInitTime);
  }



  workUnaryOperators = () => {
      return (
        <ButtonToolbar>
          <Button id="minus" className="center-block" bsStyle="success" bsSize="xsmall" onClick={this.handleChange}>Minus</Button>
          <Button id="plus" className="center-block" bsStyle="success" bsSize="xsmall" onClick={this.handleChange}>Plus</Button>
        </ButtonToolbar>
      )
  }

  render(){
    return (
      <div>
        <ButtonToolbar>
          {this.workUnaryOperators()}
        </ButtonToolbar>
      </div>
    );
  }

}
export default TimerIncrements
