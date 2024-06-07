function printName(person: { first: string, last: string }): void {
    console.log(`${person.first} ${person.last}`);
}
printName({ first: "Younes", last: "Sebbar" });

// ? to make a property not required in an object
type Point = {
    x: number,
    y: number,
    z?: number
}
const coordinate: Point = { x: 12, y: 89 };

function randomCoordinate(): Point {
    return { x: Math.random(), y: Math.random() };
}

function doublePoint(point: Point): Point {
    return { x: point.x * 2, y: point.y * 2 };
}
//printName({first: "Todd", last: "Parsley", age: 36});
function makeUser(user: { username: string, password: string, email: string, grade: number }): void {
    console.log(user);
}
makeUser({ grade: 4, username: "grifflk", password: "Almightroo", email: "gugu@gmail.com" });

const describePerson = (person: {
    name: string,
    age: number,
    parentNames: {
        mom: string,
        dad: string
    }
}) => {
    return `Person : ${person.name} ${person.age}
            Parents : ${person.parentNames.mom} ${person.parentNames.dad}`
}

type Song = {
    title: string,
    artist: string,
    streams: number,
    credit: { producer: string, writer: string }
}

function calculatePayout(song: Song): number {
    return song.streams * 0.33;
}

function printSong(song: Song): void {
    console.log(`${song.title} - ${song.artist}`);
}

const mySong = {
    title: "Save Your tears",
    artist: "The weeknd",
    streams: 1384590067,
    credit: { producer: "The weeknd", writer: "Abel Tesfaye" }
}

calculatePayout(mySong);
printSong(mySong);

type Person = {
    readonly id: number,
    name: string
};

const p: Person = {
    id: 1,
    name: "Younes"
}

p.name = "Mohammed";

type Circle = {
    radius: number
}
type Colorful = {
    color: string
}

//Interection types , gather properties of 2 or more other types
type ColorCircle = Circle & Colorful & {
    background: string
};

const something: ColorCircle = {
    radius: 1,
    color: "red",
    background: "uhu"
}