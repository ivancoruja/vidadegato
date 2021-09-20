const Character = require("./character");

class Npc extends Character {
    constructor(Name="",Type="",Health=100,Attack=100,Defense=100,Special=100,Xp=99,Level=100) {
        super(Name,Type,Health,Attack,Defense,Special,Xp,Level);
    }
}

let npcs = [];
let mother = new Npc("Mother","smart");
npcs.push(mother);

module.exports = npcs;