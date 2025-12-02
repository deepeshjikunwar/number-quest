"use strict";
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let currentScore = 20;
let highScore = 0;
document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "‼️ No number entered";
  } else if (guess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".message").textContent = "🎉 You are correct.";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (highScore < currentScore) {
      highScore = currentScore;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess < secretNumber) {
    if (currentScore > 1) {
      document.querySelector(".message").textContent = "📉 Too Low";
      currentScore--;
      document.querySelector(".score").textContent = currentScore;
    } else {
      document.querySelector(".message").textContent = "☹️ You Lose";
      currentScore--;
      document.querySelector("body").style.backgroundColor = "red";
      document.querySelector(".check").disabled = "true";
      document.querySelector(".score").textContent = currentScore;
    }
  } else if (guess > secretNumber) {
    if (currentScore > 1) {
      document.querySelector(".message").textContent = "📈 Too High";
      currentScore--;
      document.querySelector(".score").textContent = currentScore;
    } else {
      document.querySelector(".message").textContent = "☹️ You Lose";
      currentScore--;
      document.querySelector("body").style.backgroundColor = "red";
      document.querySelector(".check").disabled = "true";
      document.querySelector(".score").textContent = currentScore;
    }
  }
});
document.querySelector(".again").addEventListener("click", () => {
  currentScore = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = "";
  document.querySelector(".score").textContent = currentScore;
  document.querySelector("body").style.backgroundColor = "#222";
});
