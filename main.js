const prompt = require("prompt-sync") ();
const playIntro = require("./levels/001-intro");
const playTutorial = require("./levels/002-tutorial");

function playGame() {
  console.clear();
  playIntro();
  prompt();
  playTutorial();
}

playGame();