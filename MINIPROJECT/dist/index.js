"use strict";
const btn = document.getElementById("btn");
const input = document.getElementById("todoinput");
const form = document.querySelector("form");
const list = document.querySelector("ul");
const todos = loadTodos();
todos.map(createTodo);
function loadTodos() {
    const todoList = localStorage.getItem("todos");
    if (todoList === null)
        return [];
    return JSON.parse(todoList);
}
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
//(<HTMLInputElement>input).value;
function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
        text: input.value,
        completed: false
    };
    createTodo(newTodo);
    todos.push(newTodo);
    saveTodos();
}
function createTodo(todo) {
    const Li = document.createElement("LI");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", function () {
        todo.completed = checkbox.checked;
        saveTodos();
    });
    Li.append(todo.text);
    Li.append(checkbox);
    list.append(Li);
    input.value = "";
}
form.addEventListener("submit", handleSubmit);
// const mystery: unknown = "HELLO WORLD";
// const numChars = (mystery as string).length;
