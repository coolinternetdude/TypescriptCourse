function greet(person: string) {
    return `Hi ${person}`;
}

function square(num: number) {
    return num * num;
}

function factorial(num: number) {
    if(num === 1) return 1;
    return num * factorial(num - 1);
}

const doSomething = (person: string = "unkown", age: number = 0, isFunny: boolean = false) => {
  return `Hi there ${person} , your age is ${age} and i think that you are funny`;
}

function addNumber(x: number, y: number) : number {
    return x + y;
}

// return type can more than one type example below

function whatEver(num: number) {
    if(num % 2 === 0) {
        return num;
    }
    return num.toString();
}

const colors = ["red", "blue", "yellow", "orange"];

colors.map(color => color.toUpperCase());

// void methods

function printTwice(msg: string): void {
    console.log(msg);
    console.log(msg);
}



function makeError(msg: string): never {
    throw new Error(msg);
}

function gameLoop(): never {
    while(true) {
        console.log("GAME RUNNING !!! NONSTOP");
    }
}

doSomething("Younes", 26 , true);
console.log(factorial(4));