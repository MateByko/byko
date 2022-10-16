
const words = [
  'californication',
  'plataforma5',
  'black',
  'summer',
  'flea',
  'aeroplane',
  'peppers',
  'unlimited',
  'arcadium',
  'love',
  'getaway',
  'stadium',
  'quixoticelixer',
  'quarter',
  'snow',
  'dylan',
  'zephyr',
  'funky',
  'chili',
  'codigo',
  'framework',
  'bug',
  'hosting',
  'desarrollo',
  'devOps',
  'scrum',
  'const',
];

window.addEventListener("load", init);

let time = 10;
let score = 0;
let isPlaying;

const wordInput = document.querySelector("#text")
const CurrentWord = document.querySelector("#randomWord");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#timeSpan");
const message = document.querySelector("#timeLeft");
const game = document.querySelector("#game");
const button = document.createElement("button");
button.innerHTML = "Reiniciar";
const element_button = document.querySelector('.main');
const correct = document.querySelector("#correct")


//funciones

function init() {
  showWord(words);
  wordInput.addEventListener('input', startMatch);
  setInterval(countdown, 1000);
  setInterval(checkStatus, 50);
}

function myClick() {
  isPlaying = true;
  time = 6;
  showWord(words);
  wordInput.value = '';
  score = 0
  game.innerHTML = "";
}

function startMatch() {
  if (matchWords()) {
      isPlaying = true;
      time = 6;
      showWord(words);
      wordInput.value = '';
      score++;
  }
  if(score === -1) {
      scoreDisplay.innerHTML = 0;
  } else {
      scoreDisplay.innerHTML = score;
  }
}

function matchWords() {
  if (wordInput.value === CurrentWord.innerHTML) {
      correct.innerHTML = 'Correct';
      return true;
  } else {
      MessageEvent.innerHTML = '';
      return false;
  }
}

function showWord(words) {
  const randIndex = Math.floor(Math.random() * words.length);
  CurrentWord.innerHTML = words[randIndex];
}

function countdown() {
  if(time > 0) {
      time--;
  } else if(time === 0) {
      isPlaying = false;
  }
  timeDisplay.innerHTML = time;   
}

function checkStatus() {
  if (!isPlaying && time === 0) {
     game.innerHTML = "Game Over...";
     score = -1;
     element_button.appendChild(button).addEventListener("click", myClick);
  }
}