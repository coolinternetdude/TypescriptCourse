// generics
const nums: Array<number> = [];
const colors: Array<string> = ["Red", "Blue", "Green"];

const inputEl = document.querySelector<HTMLInputElement>("#username")!;
inputEl.value = "Sorry This input was hacked"

function numberIndentity(number: number): number { return number }
function stringIdentity(msg: string): string { return msg }
function booleanIdentity(bool: boolean): boolean { return bool }

// instead of predicting the return and parameter type we can do this instead

function identity<Type>(item: Type): Type {
    return item;
}

interface Animal {
    name: string;
    type: string;
}

identity<string>("Hello");
identity<Animal>({ name: "neeko", type: "Cat" });



function returnRandomElement<T>(list: T[]): T {
    const idx = Math.floor(Math.random() * list.length);
    return list[idx];
}



console.log(returnRandomElement<number>([1, 2, 3, 5, 7, 9, 19]));
console.log(returnRandomElement<string>(["a", "b", "F"]));
returnRandomElement([1, 2, "HAHAHAHA", true]);

// Generics with multiple types

function merge<T extends object, U extends object>(obj1: T, obj2: U) {
    return {
        ...obj1,
        ...obj2
    }
}

const merged = merge({ name: "Younes" }, { main: ["Aphelios", "Jhin", "Xayah"], rank: "Plat2" });
merge({ name: "Chandler" }, {});
console.log(merged);

interface Lengthy {
    length: number;
}

// function printDoubleLength<T extends Lengthy>(param: T): number {
//     return param.length * 2;
// }

function makeEmptyArray<T = number>(): T[] {
    return [];
}

// Generics in Classes

interface Song {
    title: string;
    artist: string;
}
interface Video {
    title: string;
    creator: string;
    resolution: string;
}

class Playlist<T> {
    public list: T[] = [];
    add(el: T) {
        this.list.push(el);
    }
}

const followRivers = new Playlist<Song>();
followRivers.add({ title: "Follow rivers", artist: "Lykke li" });
console.log(followRivers.list);