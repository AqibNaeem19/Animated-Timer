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
      this.onStart();
    }
    this.tick();
    this.intervalId = setInterval(this.tick, 1000);
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
      this.remainingTime = this.remainingTime - 1;
      if(this.onTick){
        this.onTick();
      }
    }
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

const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart(){
    console.log('Timer started')
  },
  onTick(){
    console.log('Time ticked')
  },
  onComplete(){
    console.log('Timer Completed')
  }
})

