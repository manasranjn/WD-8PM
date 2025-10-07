const startCountDown = () => {
  const timeInput = document.getElementById("timeInput").value;
  const timerDisplay = document.getElementById("timer");
  const timeRemaining = parseInt(timeInput);


  if (isNaN(timeRemaining) || timeRemaining <= 0) {
    timerDisplay.textContent = "Please enter a valid number";
    return
  }

  //clear the previous count down text
  timerDisplay.textContent = `Time Left ${timeRemaining} seconds`;
  for (let i = timeRemaining; i >= 0; i--) {
    (function (count) {
      setTimeout(() => {
        if (count > 0) {
          timerDisplay.textContent = `Time Left: ${count} seconds`;
        } else {
          timerDisplay.textContent = "Times's up";
        }
      }, (timeRemaining - count) * 2000);
    })(i);
  }
}

document.getElementById("startBtn").addEventListener("click", startCountDown);
