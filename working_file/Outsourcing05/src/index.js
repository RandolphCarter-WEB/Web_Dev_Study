import gameData from "./data.js";

//const
const container = document.getElementById("alphabetButtons");
let answerDisplay = document.getElementById("hold");
let answer = "";
let hint = "";
let life = 10;
let wordDisplay = [];
let winningCheck = "";
const containerHint = document.getElementById("clue");
const buttonHint = document.getElementById("hint");
const buttonReset = document.getElementById("reset");
const livesDisplay = document.getElementById("mylives");
let myStickman = document.getElementById("stickman");
let context = myStickman.getContext("2d");

//generate alphabet button
function generateButton() {
  let buttonsHTML = "abcdefghijklmnopqrstuvwxyz".split("").map((letter) =>
        `<button class = "alphabetButtonJS" id="${letter}">${letter}</button>`
    ).join("");

  return buttonsHTML;
}

function handleClick(event) {
  const isButton = event.target.nodeName === "BUTTON";
  if (isButton) {
    //console.dir(event.target.id);
    //console.log(isButton);
    const buttonId = document.getElementById(event.target.id);
    buttonId.disabled = "true";
  }
  return;
}

function setAnswer() {
  const random_question = Math.floor(Math.random() * 2);
  const random_data = Math.floor(Math.random() * (random_question == 0 ? 6 : 4));

  const categoryNameJS = document.getElementById("categoryName");
  categoryNameJS.innerHTML = gameData[random_question].key;

  //console.log(chosenCategory);
  //console.log(chosenWord);
  answer = gameData[random_question].data[random_data].categories;
  hint = gameData[random_question].data[random_data].hint
  answerDisplay.innerHTML = generateAnswerDisplay(answer);
}

function generateAnswerDisplay(word) {
  let wordArray = word.split("");
  //console.log(wordArray);
  for (let i = 0; i < answer.length; i++) {
    if (wordArray[i] !== "-") {
      wordDisplay.push("_");
    } else {
      wordDisplay.push("-");
    }
  }
  return wordDisplay.join(" ");
}

function showHint() {
  containerHint.innerHTML = `Clue - ${hint}`;
}

buttonHint.addEventListener("click", showHint);
//setting initial condition
function init() {
  answer = "";
  hint = "";
  life = 10;
  wordDisplay = [];
  winningCheck = "";
  context.clearRect(0, 0, 400, 400);
  canvas();
  containerHint.innerHTML = `Clue - `;
  livesDisplay.innerHTML = `You have ${life} lives!`;
  setAnswer();
  container.innerHTML = generateButton();
  container.addEventListener("click", handleClick);
  console.log(answer);
  //console.log(hint);
}

window.onload = init();

//reset (play again)
buttonReset.addEventListener("click", init);

//guess click
function guess(event) {
  let guessWord = event.target.id;
  let answerArray = answer.split("");
  let counter = 0;
  if (answer === winningCheck) {
    livesDisplay.innerHTML = `YOU WIN!`;
    return;
  } else {
    if (life > 0) {
      for (let j = 0; j < answer.length; j++) {
        if (guessWord === answerArray[j]) {
          wordDisplay[j] = guessWord;
          console.log(guessWord);
          answerDisplay.innerHTML = wordDisplay.join(" ");
          winningCheck = wordDisplay.join("");
          //console.log(winningCheck)
          counter += 1;
        }
      }
      if (counter === 0) {
        life -= 1;
        counter = 0;
        animate();
      } else {
        counter = 0;
      }
      if (life > 1) {
        livesDisplay.innerHTML = `You have ${life} lives!`;
      } else if (life === 1) {
        livesDisplay.innerHTML = `You have ${life} life!`;
      } else {
        livesDisplay.innerHTML = `GAME OVER!`;
      }
    } else {
      return;
    }
    console.log(wordDisplay);
    //console.log(counter);
    //console.log(life);
    if (answer === winningCheck) {
      livesDisplay.innerHTML = `YOU WIN!`;
      return;
    }
  }
}

container.addEventListener("click", guess);

const drawArray = [
  [60, 70, 100, 100],
  [60, 70, 20, 100],
  [60, 46, 100, 50],
  [60, 46, 20, 50],
  [60, 36, 60, 70],
  "head",
  [60, 5, 60, 15],
  [0, 5, 70, 5],
  [10, 0, 10, 600],
  [0, 150, 150, 150]
];

// Hangman
function animate() {
  myStickman = document.getElementById("stickman");
  context = myStickman.getContext("2d");

  const item = drawArray[life];

  item === "head" ? head(context) : draw(context, item);
}

function canvas() {
  myStickman = document.getElementById("stickman");
  context = myStickman.getContext("2d");
  context.beginPath();
  context.strokeStyle = "#fff";
  context.lineWidth = 2;
}

function head(context) {
  context.beginPath();
  context.arc(60, 25, 10, 0, Math.PI * 2, true);
  context.stroke();
}

function draw(context, [$pathFromx, $pathFromy, $pathTox, $pathToy]) {
  context.moveTo($pathFromx, $pathFromy);
  context.lineTo($pathTox, $pathToy);
  context.stroke();
}