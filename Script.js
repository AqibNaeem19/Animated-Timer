const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');

 const circumference = 2 * Math.PI * circle.getAttribute('r');
 circle.setAttribute('stroke-dasharray', circumference);

 let duration;

const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart(totalDuration){
    duration = totalDuration;
  },
  onTick(timeRemaining){
    circle.setAttribute('stroke-dashoffset', 
      circumference * timeRemaining / duration - circumference
    );
  },
  onComplete(){
    durationInput.value = "10"
    circle.setAttribute('stroke-dashoffset', 0);
  }
})

