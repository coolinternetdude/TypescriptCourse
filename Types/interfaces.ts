// we use them to create reusable, modular types that describe the shape of objects 
interface Person {
    readonly id: number,
    first: string,
    last: string,
    age: number,
    nickname?: string,
    sayHi: () => string,
    sayHi1(): string
};

const sayHappyBirthday = (person: Person) => {
    return `Hey ${person.first}, Congrats on turning ${person.last}`;
}

//sayHappyBirthday({ first: "Younes", age: 27 });
const leonardo: Person = {
    id: 12,
    first: "Leonardo",
    last: "Dicaprio",
    age: 47,
    nickname: "Leo",
    sayHi: () => {
        return "Hello"
    },
    sayHi1: function () { return "Hello" }
}

interface Product {
    name: string,
    price: number,
    applyDiscount(discound: number): number
}

const sneakers: Product = {
    name: "White sneakers",
    price: 40,
    applyDiscount(amount: number) {
        this.price = this.price * (1 - amount);
        return this.price;
    }
}

// reopening interfaces

interface Dog {
    name: string,
    age: number
}



interface Dog {
    breed: string,
    bark(): string
}

const eegi: Dog = {
    name: "Eeegi",
    age: 10,
    breed: "australian",
    bark() { return "WOOF WOOF" }
}

const enum jobs {
    DRUG = "DRUG SNIFFER",
    BOMB = "BOMB",
    GUIDE = "GUIDE DOG"
}

interface ServiceDog extends Dog {
    job: "Drug sniffer" | 'Bomb' | 'Guide dog'
}

const maya: ServiceDog = {
    name: "maya",
    age: 3,
    breed: "pitbull",
    bark: () => "WOOF BARK",
    job: "Drug sniffer"
}

// extending from multiple interfaces

interface Human {
    name: string
}

interface Employee {
    readonly id: number,
    email: string
}

interface Engineer extends Human, Employee {
    level: string,
    languages: string[]
}

const younes: Engineer = {
    name: "Younes",
    id: 123,
    email: "Younes@gmail.com",
    level: "Senior",
    languages: ["JS", "Python"]
}