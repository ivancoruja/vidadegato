const sleep = require("../elements/sleep");
const player = require("../elements/player");
const { text, options } = require("./001-assets");

function playIntro() {
  sleep(2000);
  console.log(text.t01);
  sleep(2000);
  console.log(text.t02)
  sleep(2000);
  console.log(text.t03);
  sleep(2000);
  console.log(options.o00);
  sleep(2000);
  console.log(options.o01);
  sleep(2000);
  console.log(options.o02);
}

module.exports = playIntro;