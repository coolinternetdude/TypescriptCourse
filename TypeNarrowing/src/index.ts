// Typeof Guards    

function triple(value: number | string) {
    if (typeof value === "string") {
        return value.repeat(3);
    }
    return value * 3;
}

// Thruthiness guards

const printLetters = (word?: string) => {
    if (word) {
        for (let letter of word) {
            console.log(letter);
        }
    } else {
        console.log("You did not pass a word");
    }
}

// Equality narrowing
// ==  to test only values === to test type and value

function someDemo(x: number | string, y: string | boolean) {
    if (x === y) {
        console.log(x.toUpperCase());
    }
}

// NARROWING WITH THE IN OPERATOR

interface Movie {
    title: string,
    duration: number
}

interface TVshow {
    title: string,
    numEpisode: number,
    episodeDuration: number
}

function getRuntime(media: Movie | TVshow) {
    if ("duration" in media) return media.duration / 60;
    return (media.numEpisode * media.episodeDuration) / 60;
}

console.log(getRuntime({ title: "Requiem for a dream", duration: 102 }));
console.log(getRuntime({ title: "Friends", numEpisode: 239, episodeDuration: 25 }));

// instanceOf type Narrowing

function getDate(date: string | Date) {
    if (date instanceof Date) console.log(date.toUTCString());
    return console.log(new Date(date).toUTCString());
}

// Type Predicates Narrowing

interface Cat {
    name: string;
    numLives: number;
}

interface Dog {
    name: string;
    breed: string;
}

function isCat(animal: Cat | Dog): animal is Cat {
    return (animal as Cat).numLives !== undefined;
}

function MakeNoise(pet: Cat | Dog) {
    if (isCat(pet)) {
        console.log("MEOW");
    } else {
        console.log("WOOF");
    }

}

// Discriminated Unions

interface Cow {
    name: string;
    weight: number;
    age: number;
    kind: "cow";
}
interface Pig {
    name: string;
    weight: number;
    age: number;
    kind: "pig";
}
interface Rooster {
    name: string;
    weight: number;
    age: number;
    kind: "rooster"
}

type FarmAnimal = Rooster | Cow | Pig;

function getAnimalSound(animal: FarmAnimal) {
    switch(animal.kind){
        case "rooster":
             return "Cockaloodedoo";
        case "pig":
             return "Oink!";
        case "cow":
             return "Mooo!";
        default: 
            const _exhaustiveCheck: never = animal;
            return _exhaustiveCheck;
    }
}


