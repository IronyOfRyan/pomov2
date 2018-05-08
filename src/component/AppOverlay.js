import React, { Component } from "react";
import TimerInputs from "../view/timerInputs.js";
import WorkTimeDisplay from "../view/timerWorkButton.js";
import { Overlay, Header, Span, ContentHolder } from "../styles/appoverlay.js";
import PropTypes from "prop-types";

class AppOverlay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        width: 0
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
    const style = { width: 100 + "%" };
    this.setState({ style });
  };

  closeNav = () => {
    document.removeEventListener("click", this.closeNav);
    const style = { width: 0 };
    this.setState({ style });
  };

  handleChange = ev => {
    const newInitTime = this.props.initTime;

    if (ev.target.id === "hours" && ev.target.value <= 4)
      newInitTime
        .subtract(newInitTime.get("hour"), "hours")
        .add(parseInt(ev.target.value, 10), "hours");
    if (ev.target.id === "minutes" && ev.target.value < 60)
      newInitTime
        .subtract(newInitTime.get("minutes"), "minutes")
        .add(parseInt(ev.target.value, 10), "minutes");
    if (ev.target.id === "seconds" && ev.target.value < 60)
      newInitTime
        .subtract(newInitTime.get("seconds"), "seconds")
        .add(parseInt(ev.target.value, 10), "seconds");

    this.props.setInitTime(newInitTime);
  };

  handleKeyPress = event => {
    if (event.key == "Enter") {
      event.preventDefault();
      this.closeNav();
    }
  };

  render() {
    return (
      <div>
        <Span onClick={this.openNav}>&#9776; Open Settings</Span>
        <Overlay style={this.state.style}>
          <ContentHolder style={this.state.style}>
            <Header>
              <h2>Timer Settings</h2>
              <p>How long do you want to work?</p>
            </Header>
            <div id="content-holder">
              <WorkTimeDisplay initTime={this.props.initTime} />
              <TimerInputs
                enterKey={this.handleKeyPress}
                handleChange={this.handleChange}
                initTime={this.props.initTime}
              />
            </div>
            <a
              href="javascript:void(0)"
              className="closebtn"
              onClick={this.closeNav}
            >
              Close Settings
            </a>
          </ContentHolder>
        </Overlay>
      </div>
    );
  }
}

AppOverlay.propTypes = {
  initTime: PropTypes.object,
  setInitTime: PropTypes.func
};

export default AppOverlay;
