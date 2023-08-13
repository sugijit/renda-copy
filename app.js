var score1 = 0;
var score2 = 0;

const start1 = document.getElementById(".btn-start1"); //button left
const start2 = document.getElementById(".btn-start2"); //button left
const leftButtons = document.querySelectorAll(".player-1"); //button left
const rightButtons = document.querySelectorAll(".player-2"); //button left
const pointP1 = document.querySelectorAll(".point-p1"); //point
const pointP2 = document.querySelectorAll(".point-p2"); //point
const P1 = document.getElementById("1");
const P2 = document.getElementById("2");

leftButtons.forEach((button) => {
  button.addEventListener("click", function () {
    score1++;
    P1.textContent = score1;
  });
});

rightButtons.forEach((button) => {
  button.addEventListener("click", function () {
    score2++;
    P2.textContent = score2;
  });
});

function init() {
  P1.textContent = 0;
  P2.textContent = 0;
  start1.textContent = "OMG";
}

function timer() {}
