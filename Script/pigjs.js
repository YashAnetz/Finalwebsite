"use strict";

const player1 = document.querySelector(".player--1");
const player2 = document.querySelector(".player--2");

let score1 = document.getElementById("score--1");
let score2 = document.getElementById("score--2");
const dice = document.querySelector(".dice");
const hold = document.querySelector(".hold");
const pressroll = document.querySelector(".roll");
let overlay = document.querySelector(".overlay");
let playbutton = document.querySelector(".play");
let current1 = document.getElementById("current--1");
let current2 = document.getElementById("current--2");
let player1wins = document.querySelector(".winner1");
let player2wins = document.querySelector(".winner2");
let exitbutton = document.querySelector(".exit");
let exitbutton2 = document.querySelector(".exit2");

let newgamebutton = document.querySelector(".newgame");
let winnerbanner = document.querySelector(".winner");
let scores = [0, 0];
let activeplayer = 1;
let currentscore = 0;
let score1num;
let score2num;

score1.textContent = 0;
score2.textContent = 0;
current1.textContent = 0;
current2.textContent = 0;
dice.classList.add("hidden");

pressroll.addEventListener("click", function () {
  let dicenumber = Math.trunc(Math.random() * 6) + 1;
  console.log("Dice number " + dicenumber);
  dice.classList.remove("hidden");
  document.querySelector(".dice").src = `/Images/dice-${dicenumber}.png`;
  document.querySelector(".dice").style.animationName = "diceanime";

  if (dicenumber != 1) {
    currentscore = currentscore + dicenumber;
    document.getElementById(`current--${activeplayer}`).textContent =
      currentscore;
  } else {
    document.getElementById(`current--${activeplayer}`).textContent = 0;

    player1.classList.toggle("player--active");
    player2.classList.toggle("player--active");
    currentscore = 0;
    if (activeplayer == 1) {
      activeplayer = 2;
    } else {
      activeplayer = 1;
    }
  }
});

hold.addEventListener("click", function () {
  let hold1 = document.getElementById(`current--${activeplayer}`).textContent;
  hold1 = Number(hold1);

  if (activeplayer == 1) {
    score1num = Number(score1.textContent);

    score1.textContent = score1num + hold1;

    document.getElementById(`current--${activeplayer}`).textContent = 0;

    player1.classList.toggle("player--active");
    player2.classList.toggle("player--active");

    activeplayer = 2;
  } else {
    score2num = Number(score2.textContent);

    score2.textContent = score2num + hold1;
    document.getElementById(`current--${activeplayer}`).textContent = 0;

    player1.classList.toggle("player--active");
    player2.classList.toggle("player--active");
    activeplayer = 1;
  }

  if (score1.textContent > 100) {
    console.log("p1 win");
    player1wins.classList.remove("hide");
    overlay.classList.remove("hide");
    exitbutton.classList.remove("hide");
  } else if (score2.textContent > 100) {
    console.log("p2 win");
    player2wins.classList.remove("hide");
    overlay.classList.remove("hide");
    exitbutton.classList.remove("hide");
  }
});

exitbutton.addEventListener("click", function () {
  winnerbanner.classList.add("hide");
  overlay.classList.add("hide");

  newgame();
});

exitbutton2.addEventListener("click", function () {
  winnerbanner.classList.add("hide");
  overlay.classList.add("hide");

  newgame();
});

function newgame() {
  current1.textContent = 0;
  current2.textContent = 0;
  score1.textContent = 0;
  score2.textContent = 0;
  dice.classList.add("hidden");
}

newgamebutton.addEventListener("click", function () {
  newgame();
});

var x = document.getElementById("myvideo");

playbutton.addEventListener("click", function () {
  if (x.paused) {
    x.play();
    playbutton.innerHTML = "🎵";
  } else {
    x.pause();
    playbutton.innerHTML = "🎶";
  }
});
