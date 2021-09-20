const Character = require("./character");

class Player extends Character {
    constructor(Name="",Type="",Health=0,Attack=0,Defense=0,Special=0,Xp=0,Level=0) {
        super(Name,Type,Health,Attack,Defense,Special,Xp,Level);
        this.Health = 20;
    }
}

let player = new Player();

module.exports = player;