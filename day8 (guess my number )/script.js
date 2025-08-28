"use strict";

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
let score = 20;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".score").textContent = score;

document.querySelector(".check").addEventListener("click", function (e) {
  e.preventDefault();

  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("Please enter a number!");
    document.querySelector(".guess").classList.add("shake");
    setTimeout(() => {
      document.querySelector(".guess").classList.remove("shake");
    }, 500);
  } else if (guess === randomNumber) {
    displayMessage("Correct Number!");
    document.querySelector(".number").textContent = randomNumber;
    document.body.style.backgroundColor = "#4caf50";
    document.querySelector(".number").style.width = "12rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    document.querySelector(".check").disabled = true;
  } else {
    if (score > 1) {
      displayMessage(guess > randomNumber ? "Too high!" : "Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost the game!");
      document.querySelector(".score").textContent = 0;
      document.body.style.backgroundColor = "#e74c3c";
      document.querySelector(".check").disabled = true;
    }
  }
});

document.querySelector(".btnAgain").addEventListener("click", function () {
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.body.style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "8rem";
  document.querySelector(".check").disabled = false;
});
