const player = require("../elements/player");
const npcs = require("../elements/npc");

function playTutorial() {
  console.log(player.Health);
  for (let npc of npcs) {
    for (let [statName, statValue] of Object.entries(npc)) {
      console.log(statName + ":", statValue);
    }
  }
  player.setName();
  player.setType();
  for (let [statName, statValue] of Object.entries(player)) {
    console.log(statName + ":", statValue);
  }
}
  
module.exports = playTutorial;