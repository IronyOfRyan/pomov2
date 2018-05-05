import React, {Component} from 'react';
import {Button, ButtonToolbar} from 'react-bootstrap';
import * as timerStates from '../controls/timerStates.js';

class TimerModeButtons extends Component {
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
          <Button id="minus" className="unaryButton" bsStyle="success" bsSize="xsmall" onClick={this.handleChange}>-5</Button>
          <Button id="plus" className="unaryButton" bsStyle="success" bsSize="xsmall" onClick={this.handleChange}>+5</Button>
        </ButtonToolbar>
      )
  }

  breakUnaryOperators = () => {
      return (
        <ButtonToolbar>
          <Button id="minus" className="unaryButton" bsStyle="success" bsSize="xsmall" onClick={this.handleChange}>-5</Button>
          <Button id="plus" className="unaryButton" bsStyle="success" bsSize="xsmall" onClick={this.handleChange}>+5</Button>
        </ButtonToolbar>
      )
  }



  render(){
    return (
      <div>
        <ButtonToolbar>
        <div className='center-block'>
          <Button bsStyle="success" bsSize="large" onClick={this.props.resetTimer}>Work:  {`${this.props.workTime}`} mins</Button>
          {this.workUnaryOperators()}
        </div>
        <div className='center-block'>
          <Button bsStyle="success" bsSize="large" onClick={this.props.swapTimer}>Break:  {`${this.props.breakTime}`} mins</Button>
          {this.breakUnaryOperators()}
        </div>
        </ButtonToolbar>
      </div>
    );
  }

}
export default TimerModeButtons
