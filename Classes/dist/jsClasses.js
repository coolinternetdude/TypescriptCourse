class Player {
    // private property
    #score = 0;
    #numLives = 10;
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    static randomPlayer() {
        return new Player("Rachel", "Green");
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    set fullName(newName) {
        const [first, last] = newName.split(" ");
        this.first = first;
        this.last = last;
    }
    get score() {
        return this.#score;
    }
    set score(newScore) {
        if (newScore < 0) throw new Error("Score must be positive");
        this.#score = newScore;
    }
    taunt() {
        console.log("GET REKT KID");
    }
    loseLife() {
        this.numLives -= 1;
    }
}

class AdminPlayer extends Player {
    constructor(powers) {
        super();
        this.powers = powers;
    }
}

const player1 = new Player("Younes", "Sebbar");
const player2 = new Player("Hamza", "Gourram");
const admin = new AdminPlayer(["Marksmen", "5 weapons"]);
console.log(player1.fullName);
console.log(player2.score);