// class Player {
//     public readonly first: string;
//     public readonly last: string;
//     private score: number = 0;
//     constructor(first: string, last: string) {
//         this.first = first;
//         this.last = last;
//     }

//     private secretMethod() {
//         console.log("SECRET METHOD");
//     }
// }

class Player {
    constructor(
        public first: string,
        public last: string,
        protected _score: number) { }

    private secretMethod() {
        console.log("SECRET METHOD");
    }
    get fullName(): string {
        return `${this.first} ${this.last}`;
    }

    get score() {
        return this._score;
    }
    set score(newScore) {
        if (newScore < 0) throw new Error("Score cannot be negative");
        this._score = newScore;
    }
}

class SuperPlayer extends Player {
    public isAdmin: boolean = true;
    maxScore() {
        this._score = 99;
    }
}

interface colorful {
    color: string;
}

class Bike implements colorful {
    constructor(public color: string) { }
}

class Jacket implements colorful {
    constructor(public color: string) { }
}

abstract class Employee {
    constructor(public first: string, public last: string) { }
    abstract getPay(): number;
    greet() { console.log("HELLO THERE MR EMPLOYEE") };
}

class PartTimeEmployee extends Employee {
    constructor(
        first: string,
        last: string,
        private hourlyRate: number,
        private hoursWorked: number) {
        super(first, last);
    }
    getPay(): number {
        return this.hourlyRate * this.hoursWorked;
    }
}

class FullTimeEmployee extends Employee {
    constructor(first: string, last: string, private salary: number) {
        super(first, last);
    }
    getPay(): number {
        return this.salary;
    }
}
const ross = new Player("Ross", "Geller", 2);
