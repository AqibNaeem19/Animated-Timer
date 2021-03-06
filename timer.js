class Timer {
  constructor(durationInput, startButton, pauseButton, callbacks){
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    if(callbacks){
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onComplete = callbacks.onComplete;
    }

    this.startButton.addEventListener('click', this.start);
    this.pauseButton.addEventListener('click', this.pause);
  }

  start = () => {
    if (this.onStart){
      this.onStart(this.remainingTime);
    }
    this.tick();
    this.intervalId = setInterval(this.tick, 50);
  };

  pause = () => {
    clearInterval(this.intervalId);
  }

  tick = () => {
    if (this.remainingTime <= 0){
      this.pause();
      if(this.onComplete){
        this.onComplete();
      }
    }else {
      // On left, we are calling the setter function and equating the value as a parameter.
      // On right, we are calling the getter function and manipulating its value.
      this.remainingTime = this.remainingTime - 0.05;
      if(this.onTick){
        this.onTick(this.remainingTime);
      }
    }
  }

  get remainingTime(){
    return parseFloat(this.durationInput.value);
  }

  set remainingTime(time){
    this.durationInput.value = time.toFixed(2)
  }
}