import React from 'react';
import {Row} from 'react-bootstrap';
import * as timerStates from '../controls/timerStates.js';

// Function that adds the extra 0 in when numbers are single digits
const zeroPad = (num) => {
    return (num < 10) ? `0${num}` : `${num}`;
}

const timerDisplay = (props) => (
  <Row className="timerDisplay center-block">
    <h2> {`${zeroPad(props.currentTime.get('hours'))}:${zeroPad(props.currentTime.get('minutes'))}:${zeroPad(props.currentTime.get('seconds'))}`} </h2>
  </Row>
);

export default timerDisplay
