const timer = document.querySelector("#timer");
const startButton = document.querySelector("#start-button")
const stopButton = document.querySelector("#stop-button")
const resetButton = document.querySelector("#reset-button")

let time = 0
let isStop = true
let program = true



startButton.addEventListener("click",function (e) {
    isStop= false
    setInterval(() => {
        !isStop ? time++ : time;
        timer.innerHTML = millisToMinutesAndSeconds(time);
    }, 1);
    resetButton.setAttribute('disabled', '');
    startButton.setAttribute('disabled', '');
    stopButton.removeAttribute('disabled');
    resetButton.removeAttribute('disabled');
})
stopButton.addEventListener("click",function (e) {
    isStop= true
    stopButton.setAttribute('disabled', '');
    resetButton.removeAttribute('disabled');
    startButton.removeAttribute('disabled');
})

resetButton.addEventListener("click",function (e) {
    resetButton.removeAttribute('disabled');
    startButton.removeAttribute('disabled');
    stopButton.removeAttribute('disabled');
    time = 0
    timer.innerHTML = millisToMinutesAndSeconds(time);
})

function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = Math.floor((millis % 60000) / 1000);
    var millis = millis - ((seconds*1000) + (minutes*60000))
    return minutes + "=minutes " + (seconds + '= seconds') + "millis="+ millis;
  }
  