

 const secondsToTime = (secs) => {

  let getMinutes = secs % (60 * 60);
  let minutes = Math.floor(getMinutes / 60);

  let getSeconds = getMinutes % 60;
  let seconds = Math.ceil(getSeconds);
}



const starTimer = () => {
  if (this.minutes === 0) {
    this.seconds = 0;
    return;
  }
  if (this.state.interval) {
    timerStop();
  }
  this.started = true;
  this.interval = setInterval(countDown, 1000);
}

module.exports = {
  starTimer
};
