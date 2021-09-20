const prompt = require("prompt-sync") ();

class Character {
    constructor(Name="",Type="",Health=0,Attack=0,Defense=0,Special=0,Xp=0,Level=0) {
        this.Name = Name;
        this.Type = Type;
        this.Health = Health;
        this.Attack = Attack;
        this.Defense = Defense;
        this.Special = Special;
        this.Xp = Xp;
        this.Level = Level;
    }
    setName() {
        this.Name = prompt('Name: ');
    }
    setType() {
        let type;
        do {
            type = prompt('Type: ');
        }
        while (type !== 'a' && type !== 'h' && type !== 's');
        if (type == "a") {
            type = "agile";
        } else if (type == "h") {
            type = "heavy";
        } else if (type == "s") {
            type = "smart";
        }
        this.Type = type;
        if (this.Type == 'agile') {
            this.Attack = 2;
            this.Defense = 3;
            this.Special = 2;
        } else if (this.Type == 'heavy') {
            this.Attack = 3;
            this.Defense = 3;
            this.Special = 1;
        } else if (this.Type == 'smart') {
            this.Attack = 2;
            this.Defense = 2;
            this.Special = 3;
        }
    }
    getAttack(attType) {
    };
}

module.exports = Character;