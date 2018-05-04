
const init = (activity) => {
    if (activity == 'work') {
      notification.innerHTML = 'Get to Work!';
      this.areYouWorking = true;
      this.minutes = +workMin.innerHTML;
    } else {
      this.areYouWorking = false;
      this.minutes = +breakMin.innerHTML;
    }
    this.seconds = 0;
    app.renderTime();
}

const renderTime = () => {
      minuteSpan.innerHTML = app.zeroPad(this.minutes);
      secondSpan.innerHTML = app.zeroPad(this.seconds);
    }
    // Reset the value to whatver the work/break buttons value is
    const resetVal = () => {
      this.started = false;
      if (this.areYouWorking) {
        this.minutes = parseInt(workMin.innerHTML);
      } else {
        this.minutes = parseInt(breakMin.innerHTML);
      }
      this.seconds = 0;
      app.renderTime();
    }
    // Logic that count the timer down from 59 seconds subtracting a minute everytime it reaches 0 until secs/min are both 0
    const countDown = () => {
      if (!this.props.started) {
        return false;
      }

      if (this.props.seconds === 0) {
        if (this.props.minutes === 0) {
          timerDone();
          // audio.play();
          return;
        }
        this.setState({seconds: this.props.seconds = 59});
        this.setState({minutes: this.props.minutes--});
      } else {
        this.setState({second: this.props.seconds--});
      }

    }

    const audioStop = () => {
      audio.pause();
      audio.currentTime = 0;
    }

    //Clears the interval to stop the function from changing the numbers
    const timerStop = () => {
      clearInterval(this.interval);
    }

    // When the timer gets to all 0's switch it from the work timer to the break and vice versa
    const timerDone = () => {
      this.minutes = 0;
      this.seconds = 0;
      this.started = false;
      app.init() ? this.areYouWorking : app.init('work');
  }

  module.exports = {
    timerStop,
    countDown
  };
