interface Todo {
    text: string,
    completed: boolean;
}

const btn = document.getElementById("btn")! as HTMLButtonElement;
const input = document.getElementById("todoinput")! as HTMLInputElement;
const form = document.querySelector("form")!;
const list = document.querySelector("ul")!;

const todos: Todo[] = loadTodos();
todos.map(createTodo);

function loadTodos(): Todo[] {
    const todoList = localStorage.getItem("todos");
    if (todoList === null) return [];
    return JSON.parse(todoList);
}

function saveTodos(): void {
    localStorage.setItem("todos", JSON.stringify(todos));
}


//(<HTMLInputElement>input).value;

function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    const newTodo: Todo = {
        text: input.value,
        completed: false
    }
    createTodo(newTodo);
    todos.push(newTodo);
    saveTodos();
}

function createTodo(todo: Todo) {
    const Li = document.createElement("LI");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", function () {
        todo.completed = checkbox.checked;
        saveTodos();
    })
    Li.append(todo.text);
    Li.append(checkbox);
    list.append(Li);
    input.value = "";
}

form.addEventListener("submit", handleSubmit);

// const mystery: unknown = "HELLO WORLD";
// const numChars = (mystery as string).length;