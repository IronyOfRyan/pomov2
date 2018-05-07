import React, {Component} from 'react';
import {Jumbotron} from 'react-bootstrap';

const zeroPad = (num) => {
    return (num < 10) ? `0${num}` : `${num}`;
}

const WorkButton = (props) => {

return (
      <Jumbotron className='text-center workSetupDisplay'>
      {
        (props.initTime.get('hours') < 1)
      ? <h1> {`${props.initTime.get('minutes')}:${zeroPad(props.initTime.get('seconds'))}`} </h1>
      : <h1> {`${props.initTime.get('hours')}:${zeroPad(props.initTime.get('minutes'))}:${zeroPad(props.initTime.get('seconds'))}`} </h1>
      }
      </Jumbotron>
    );


}
export default WorkButton
