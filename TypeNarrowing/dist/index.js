"use strict";
// Typeof Guards    
function triple(value) {
    if (typeof value === "string") {
        return value.repeat(3);
    }
    return value * 3;
}
// Thruthiness guards
const printLetters = (word) => {
    if (word) {
        for (let letter of word) {
            console.log(letter);
        }
    }
    else {
        console.log("You did not pass a word");
    }
};
// Equality narrowing
// ==  to test only values === to test type and value
function someDemo(x, y) {
    if (x === y) {
        console.log(x.toUpperCase());
    }
}
function getRuntime(media) {
    if ("duration" in media)
        return media.duration / 60;
    return (media.numEpisode * media.episodeDuration) / 60;
}
console.log(getRuntime({ title: "Requiem for a dream", duration: 102 }));
console.log(getRuntime({ title: "Friends", numEpisode: 239, episodeDuration: 25 }));
// instanceOf type Narrowing
function getDate(date) {
    if (date instanceof Date)
        console.log(date.toUTCString());
    return console.log(new Date(date).toUTCString());
}
function isCat(animal) {
    return animal.numLives !== undefined;
}
function MakeNoise(pet) {
    if (isCat(pet)) {
        console.log("MEOW");
    }
    else {
        console.log("WOOF");
    }
}
function getAnimalSound(animal) {
    switch (animal.kind) {
        case "rooster":
            return "Cockaloodedoo";
        case "pig":
            return "Oink!";
        case "cow":
            return "Mooo!";
        default:
            const _exhaustiveCheck = animal;
            return _exhaustiveCheck;
    }
}
