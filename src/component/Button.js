import React, { Component} from "react";
import {ButtonToolbar, Button} from 'react-bootstrap'
import {ButtonGroup} from 'react-bootstrap'
const {play} = require('../controls/timerController.js')

class AppButton extends Component{



  render(){
    return(
      <div className="buttonStyle">
      <Button onClick={this.props.handleClick} bsStyle="primary" bsSize="large">{this.props.label}</Button>
      </div>
    );
  }
}

export default AppButton;
