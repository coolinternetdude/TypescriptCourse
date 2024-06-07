"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
axios_1.default.get("https://jsonplaceholder.typicode.com/users/1")
    .then(res => {
    const { data } = res;
    printUser(data);
})
    .catch(err => console.log("ERROR", err.message));
function printUser(user) {
    console.log(user[0].name);
    console.log(user[0].email);
    console.log(user[0].phone);
}
