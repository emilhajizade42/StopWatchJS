const timer = document.querySelector("#timer");
const startButton = document.querySelector("#start-button");
const stopButton = document.querySelector("#stop-button");
const resetButton = document.querySelector("#reset-button");

let time = 0;
let isStop = true;

setInterval(() => {
  !isStop ? time+=10 : time;
  timer.innerHTML = millisToMinutesAndSeconds(time)
}, 1);

startButton.addEventListener("click", function (e) {
  isStop = false;
  [startButton,resetButton].forEach(item => item.setAttribute("disabled", ""));
  [stopButton].forEach(item => item.removeAttribute("disabled"));
});

stopButton.addEventListener("click", function (e) {
  isStop = true;
  stopButton.setAttribute("disabled", "");
  [startButton,resetButton].forEach(item => item.removeAttribute("disabled"));
});

resetButton.addEventListener("click", function (e) {

    [stopButton,resetButton].forEach(item => item.setAttribute("disabled", ""));
 
  
  time = 0;
  timer.innerHTML = millisToMinutesAndSeconds(time);
});

function millisToMinutesAndSeconds(millis) {
  var minutes = Math.floor(millis / 60000);
  var seconds = Math.floor((millis % 60000) / 1000);
  var millis = millis - (seconds * 1000 + minutes * 60000);
  return (
    (minutes < 10 ? "0" : "") +
    minutes +
    ":" +
    (seconds < 10 ? "0" : "") +
    seconds +
    ":" +
    (millis < 100 ? "0" : "") +
    (millis < 10 ? "0" : "") +
    millis
  );
}
