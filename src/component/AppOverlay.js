import React, {Component} from 'react';
import TimerSettings from '../view/timerSettings.js';

class Test extends React.Component {

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
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";

    }

    closeNav = () => {
        document.removeEventListener("click", this.closeNav);
        const style = { width : 0 };
        this.setState({ style });
        document.body.style.backgroundColor = "#F3F3F3";
    }


    handleChange = ev => {
      const newInitTime = this.props.initTime;

      if (ev.target.id === 'hours') newInitTime.subtract(newInitTime.get('hour'), 'hours').add(parseInt(ev.target.value, 10), 'hours');
      if (ev.target.id === 'minutes') newInitTime.subtract(newInitTime.get('minutes'), 'minutes').add(parseInt(ev.target.value, 10), 'minutes');
      if (ev.target.id === 'seconds') newInitTime.subtract(newInitTime.get('seconds'), 'seconds').add(parseInt(ev.target.value, 10), 'seconds');

      this.props.setInitTime(newInitTime);
    }



    render() {
        return (
          <div>
            <span style={{fontSize:30,cursor:"pointer"}} onClick={this.openNav}>&#9776; Open Settings</span>
            <div ref="snav" className="overlay" style={this.state.style}>
                <div style={this.state.style} className="sidenav-container">
                    <div className="text-center settingsHeader">
                      <h2>Timer Settings</h2>
                      <p>How long do you want to work?</p>
                    </div>
                <div className="list-group">
                    <TimerSettings
                      handleChange={this.handleChange}
                      initTime={this.props.initTime}
                    />
                      {/*this.props.children*/}
                </div>
                <a
                    href      = "javascript:void(0)"
                    className = "closebtn"
                    onClick   = {this.closeNav}
                >
                    Close Settings
                </a>
              </div>
            </div>
          </div>
        );
    }
}

export default Test
