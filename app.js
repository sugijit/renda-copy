var intervalId;

//DOM
const start1 = document.querySelector(".btn-start1"); //start left
const start2 = document.querySelector(".btn-start2"); //start right
const leftButtons = document.querySelectorAll(".player-1"); //button left
const rightButtons = document.querySelectorAll(".player-2"); //button left
const pointP1 = document.querySelectorAll(".point-p1"); //point
const pointP2 = document.querySelectorAll(".point-p2"); //point
const P1 = document.getElementById("1");
const P2 = document.getElementById("2");
const rightTop = document.getElementById("btnn1"); //button right
const rightBottom = document.getElementById("btnn2"); //button right
const leftTop = document.getElementById("btnn3"); //button left
const leftBottom = document.getElementById("btnn4"); //button left
const refresh = document.querySelector(".refresh"); //refresh

start1.addEventListener("click", function () {
  countDown3();
});
start2.addEventListener("click", function () {
  countDown3();
});
refresh.addEventListener("click", function () {
  init();
  refresh.classList.add("invisible");
});

//Ehluuleh function
function init() {
  P1.textContent = 0;
  P2.textContent = 0;
  start1.textContent = "START";
  start2.textContent = "START";
  start1.classList.remove("btn-dead");
  start2.classList.remove("btn-dead");
  refresh.classList.remove("invisible");
}

// 10sec
function countDown10() {
  let timeLeft = 10;
  start1.classList.add("btn-dead");
  start2.classList.add("btn-dead");

  function updateCountdown() {
    if (timeLeft > 0) {
      start1.textContent = timeLeft.toFixed(1);
      start2.textContent = timeLeft.toFixed(1);
      timeLeft = timeLeft - 0.1;
      rightTop.classList.remove("btn-dead");
      rightBottom.classList.remove("btn-dead");
      leftTop.classList.remove("btn-dead");
      leftBottom.classList.remove("btn-dead");
      return timeLeft;
    } else {
      clearInterval(intervalId);
      console.log("10sec カウントダウン終了");
      rightTop.classList.add("btn-dead");
      rightBottom.classList.add("btn-dead");
      leftTop.classList.add("btn-dead");
      leftBottom.classList.add("btn-dead");
      start1.classList.add("btn-dead");
      start2.classList.add("btn-dead");
      decideWinner();
      refresh.classList.remove("invisible");
    }
  }
  if (timeLeft > 0) {
    click(timeLeft);
  }
  updateCountdown();
  intervalId = setInterval(updateCountdown, 100);
}

// 3sec
function countDown3() {
  let count = 3;
  start1.classList.add("btn-dead");
  start2.classList.add("btn-dead");
  refresh.classList.add("invisible");

  function updateCountdown() {
    if (count > 0) {
      start1.textContent = count;
      start2.textContent = count;
      count--;
    } else {
      clearInterval(intervalId);
      console.log("3sec カウントダウン終了");
      countDown10();
    }
  }

  updateCountdown();
  intervalId = setInterval(updateCountdown, 1000);
}

// click
function click(timeLeft) {
  if (timeLeft > 0) {
    var score1 = 0;
    var score2 = 0;
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
  } else {
    console.log("AAA");
  }
}

// who is winner
function decideWinner() {
  if (P1.textContent === P2.textContent) {
    start1.textContent = "DRAW";
    start2.textContent = "DRAW";
  } else if (P1.textContent > P2.textContent) {
    start1.textContent = "WINNER";
    start2.textContent = "LOSER!";
  } else {
    start1.textContent = "LOSER!";
    start2.textContent = "WINNER";
  }
}
