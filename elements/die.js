class Die {
    constructor(faces) {
        this.faces = faces;
    }
    Roll() {
        return Math.floor(Math.random()*this.faces) + 1;
    }
}

module.exports = Die;