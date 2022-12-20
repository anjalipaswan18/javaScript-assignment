var seconds = 00;
var tens = 00;
var appendTens = document.getElementById("tens");
var appendSeconds = document.getElementById("seconds");
var Start = document.getElementById("button-start");
var Stop = document.getElementById("button-stop");
var Reset = document.getElementById("button-reset");
var interval;
function startTimer() {
  tens++;
  if (tens < 9) {
    appendTens.innerHTML = "0" + tens;
  }
  if (tens > 9) {
    appendTens.innerHTML = tens;
  }
  if (tens > 99) {
    seconds++;
    appendSeconds.innerHTML = "0" + seconds;
    tens = 0;
    appendTens.innerHTML = "0" + 0;
  }
  if (seconds > 9) {
    appendSeconds.innerHTML = seconds;
  }
}
Start.onclick = function () {
  console.log("start");
  interval = setInterval(startTimer);
};
Stop.onclick = function () {
  console.log("stop");
  clearInterval(interval);
};
Reset.onclick = function () {
  console.log("reset");
  clearInterval(interval);
  tens = "00";
  seconds = "00";
  appendSeconds.innerHTML = seconds;
  appendTens.innerText = tens;
};
