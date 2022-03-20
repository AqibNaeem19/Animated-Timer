class Timer {
  constructor(durationInput, startButton, pauseButton){
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    this.startButton.addEventListerner('click', this.start);
  }

  start(){
    console.log('Start the timer')
  }
}