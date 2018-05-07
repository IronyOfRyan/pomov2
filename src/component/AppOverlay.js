import React, {Component} from 'react';
import TimerSettings from '../view/timerSettings.js';
import {ListGroup} from 'react-bootstrap/lib/'
import WorkButton from '../view/timerWorkButton.js';

class AppOverlay extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            style : {
                width : 0
            }
        };
    }

    componentDidMount() {
        document.addEventListener("DOMContentLoaded", this.openNav);
    }

    componentWillUnmount() {
        document.removeEventListener("DOMContentLoaded", this.openNav);
    }

    openNav = () => {
        const style = { width : 100 + '%' };
        this.setState({ style });

    }

    closeNav = () => {
        document.removeEventListener("click", this.closeNav);
        const style = { width : 0 };
        this.setState({ style });
    }


    handleChange = ev => {
      const newInitTime = this.props.initTime;

      if (ev.target.id === 'hours' && ev.target.value <= 4) newInitTime.subtract(newInitTime.get('hour'), 'hours').add(parseInt(ev.target.value, 10), 'hours');
      if (ev.target.id === 'minutes' && ev.target.value < 60) newInitTime.subtract(newInitTime.get('minutes'), 'minutes').add(parseInt(ev.target.value, 10), 'minutes');
      if (ev.target.id === 'seconds' && ev.target.value < 60) newInitTime.subtract(newInitTime.get('seconds'), 'seconds').add(parseInt(ev.target.value, 10), 'seconds');

      this.props.setInitTime(newInitTime);
    }

    handleKeyPress = (event) => {
        if (event.key == 'Enter') {
            event.preventDefault();
            this.closeNav();
        }
    }


    render() {
        return (
          <div>
            <span style={{fontSize:30,cursor:"pointer"}} onClick={this.openNav}>&#9776; Open Settings</span>
            <div ref="snav" className="overlay" style={this.state.style}>
                <div style={this.state.style}>
                  <div className="text-center settingsHeader">
                    <h2>Timer Settings</h2>
                    <p>How long do you want to work?</p>
                  </div>
                  <ListGroup>
                    <WorkButton
                      initTime={this.props.initTime}
                    />
                    <TimerSettings
                      enterKey={this.handleKeyPress}
                      handleChange={this.handleChange}
                      initTime={this.props.initTime}
                    />
                    {/*this.props.children*/}
                  </ListGroup>
                  {this.props.children}
                  <a
                      href="javascript:void(0)"
                      className="closebtn"
                      onClick={this.closeNav}
                  >
                      Close Settings
                  </a>
              </div>
            </div>
          </div>
        );
    }
}

export default AppOverlay
