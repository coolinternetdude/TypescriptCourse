"use strict";
// generics
const nums = [];
const colors = ["Red", "Blue", "Green"];
const inputEl = document.querySelector("#username");
inputEl.value = "Sorry This input was hacked";
function numberIndentity(number) { return number; }
function stringIdentity(msg) { return msg; }
function booleanIdentity(bool) { return bool; }
// instead of predicting the return and parameter type we can do this instead
function identity(item) {
    return item;
}
identity("Hello");
identity({ name: "neeko", type: "Cat" });
function returnRandomElement(list) {
    const idx = Math.floor(Math.random() * list.length);
    return list[idx];
}
console.log(returnRandomElement([1, 2, 3, 5, 7, 9, 19]));
console.log(returnRandomElement(["a", "b", "F"]));
returnRandomElement([1, 2, "HAHAHAHA", true]);
// Generics with multiple types
function merge(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const merged = merge({ name: "Younes" }, { main: ["Aphelios", "Jhin", "Xayah"], rank: "Plat2" });
merge({ name: "Chandler" }, {});
console.log(merged);
// function printDoubleLength<T extends Lengthy>(param: T): number {
//     return param.length * 2;
// }
function makeEmptyArray() {
    return [];
}
class Playlist {
    constructor() {
        this.list = [];
    }
    add(el) {
        this.list.push(el);
    }
}
const followRivers = new Playlist();
followRivers.add({ title: "Follow rivers", artist: "Lykke li" });
console.log(followRivers.list);
