"use strict";
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
    constructor(first, last, _score) {
        this.first = first;
        this.last = last;
        this._score = _score;
    }
    secretMethod() {
        console.log("SECRET METHOD");
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    get score() {
        return this._score;
    }
    set score(newScore) {
        if (newScore < 0)
            throw new Error("Score cannot be negative");
        this._score = newScore;
    }
}
class SuperPlayer extends Player {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
    maxScore() {
        this._score = 99;
    }
}
class Bike {
    constructor(color) {
        this.color = color;
    }
}
class Jacket {
    constructor(color) {
        this.color = color;
    }
}
class Employee {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    greet() { console.log("HELLO THERE MR EMPLOYEE"); }
    ;
}
class PartTimeEmployee extends Employee {
    constructor(first, last, hourlyRate, hoursWorked) {
        super(first, last);
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }
    getPay() {
        return this.hourlyRate * this.hoursWorked;
    }
}
class FullTimeEmployee extends Employee {
    constructor(first, last, salary) {
        super(first, last);
        this.salary = salary;
    }
    getPay() {
        return this.salary;
    }
}
const ross = new Player("Ross", "Geller", 2);
