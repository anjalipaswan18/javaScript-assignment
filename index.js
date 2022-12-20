let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timerRef = document.querySelector(".timerDisplay");
let int = null;

document.getElementById("startTimer").addEventListener("click", () => {
  if (int !== null) {
    clearInterval(int);
  }
  int = setInterval(displayTimer, 10);
  document.getElementById("startTimer").style.display = "none";
});

document.getElementById("pauseTimer").addEventListener("click", () => {
  clearInterval(int);
  document.getElementById("startTimer").style.display = "inline";
});

document.getElementById("resetTimer").addEventListener("click", () => {
  clearInterval(int);
  [milliseconds, seconds, minutes, hours] = [0, 0, 0, 00];
  timerRef.innerHTML = "00 : 00 : 00 : 00 ";
  document.getElementById("startTimer").style.display = "inline";
});

function displayTimer() {
  milliseconds += 10;
  if (milliseconds == 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
      if (minutes == 60) {
        minutes = 0;
        hours++;
      }
    }
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms =
    milliseconds < 9
      ? "0" + milliseconds
      : milliseconds < 100
      ? "" + milliseconds
      : milliseconds;
  console.log("ms", ms, milliseconds);

  timerRef.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
}
