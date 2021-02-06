// document.querySelector("body").style.background = "black";
let p1Dice = document.getElementById("p1D");
let p2Dice = document.getElementById("p2D");
let winNum = document.getElementById("winNum");
let span1 = document.getElementById("one");
let span2 = document.getElementById("two");
let score = document.getElementsByClassName("score")[0];
let roll = document.getElementById("btn");
let randP1 = Math.floor(Math.random() * 6) + 1;
let randP2 = Math.floor(Math.random() * 6) + 1;

p1Dice.setAttribute("src", `./images/dice${randP1}.png`);
p2Dice.setAttribute("src", `./images/dice${randP2}.png`);

// score Logic
winner = "";
if (randP1 > randP2) winner = "1";
else if (randP1 < randP2) winner = "2";
else if (randP1 === randP2) winner = "";

if (winner === "") {
  score.textContent = "No Winner";
} else {
  if (winner === "1") span1.setAttribute("id", "");
  if (winner === "2") span2.setAttribute("id", "");
  winNum.textContent = winner;
}

roll.addEventListener("click", () => {
  window.location.reload();
});
