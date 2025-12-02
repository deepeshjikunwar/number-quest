"use strict";
let secretNumber = getSecretNumber();
let currentScore = 20;
let currentHighScore = 0;

const messageEl = document.querySelector(".message");
const numberEl = document.querySelector(".number");
const bodyEl = document.querySelector("body");
const highScoreEl = document.querySelector(".highscore");
const scoreEl = document.querySelector(".score");
const checkEl = document.querySelector(".check");
const guessEl = document.querySelector(".guess");
const againEl = document.querySelector(".again");

const displayMessage = (messageContent) => {
  messageEl.textContent = messageContent;
};
function getSecretNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

checkEl.addEventListener("click", () => {
  const guess = Number(guessEl.value);
  if (!guess) {
    displayMessage("‼️ No number entered");
  } else if (guess === secretNumber) {
    numberEl.textContent = secretNumber;
    numberEl.style.width = "30rem";
    displayMessage("🎉 You are correct.");
    bodyEl.style.backgroundColor = "#60b347";
    if (currentHighScore < currentScore) {
      currentHighScore = currentScore;
      highScoreEl.textContent = currentHighScore;
    }
  } else if (guess !== secretNumber) {
    if (currentScore > 1) {
      displayMessage(guess > secretNumber ? "📈 Too High" : "📉 Too Low");
      currentScore--;
      scoreEl.textContent = currentScore;
    } else {
      displayMessage("☹️ You Lose");
      currentScore--;
      bodyEl.style.backgroundColor = "red";
      checkEl.disabled = "true";
      scoreEl.textContent = currentScore;
    }
  }
});
againEl.addEventListener("click", () => {
  currentScore = 20;
  secretNumber = getSecretNumber();
  numberEl.style.width = "15rem";
  numberEl.textContent = "?";
  displayMessage("Start guessing...");
  guessEl.value = "";
  scoreEl.textContent = currentScore;
  bodyEl.style.backgroundColor = "#222";
});
