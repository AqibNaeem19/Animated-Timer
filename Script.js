class Timer {
  constructor(durationInput, startButton, pauseButton){
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    this.startButton.addEventListener('click', this.start);
    this.pauseButton.addEventListener('click', this.pause)
  }

  start = () => {
    this.tick();
    this.intervalId = setInterval(this.tick, 1000);
  };

  pause = () => {
    clearInterval(this.intervalId);
  }

  tick = () => {
    // On left, we are calling the setter function and equating the value as a parameter.
    // On right, we are calling the getter function and manipulating its value.
    this.remainingTime = this.remainingTime - 1;
  }

  get remainingTime(){
    return parseFloat(this.durationInput.value);
  }

  set remainingTime(time){
    this.durationInput.value = time
  }
}


const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput, startButton, pauseButton)

