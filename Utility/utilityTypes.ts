/**************************** Partial  *************************/

interface User {
  username: string;
  password: string;
  email: string;
  age: number;
  isAdmin: boolean;
}
// Partial Utility type -> use when you want to define an object of type interface but you don't want to set all of its properties
const user: Partial<User> = { username: "younesb", password: "123" };

/**************************** Record  *************************/

type Currency = "USD" | "EUR" | "GBP" | "MAD";
type ConverionRates = Record<Currency, number>;

// use Record when you want a strong types object of already existing types or interfaces
const rates: ConverionRates = { USD: 0.9, EUR: 1.2, GBP: 1.1, MAD: 0.1 };

/**************************** Omit  ***************************/

interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type TodoPreview = Omit<Todo, "completed" | "createdAt">;

// use Omit when you want a type of a certain interface but want to exclude some properties
const firstTodo: TodoPreview = {
  title: "Do laundry",
  description: "Get your dirty clothes and put them on the washing machine",
};

/**************************** Pick  *************************/

interface SecondTodo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPre = Pick<SecondTodo, "title" | "completed">;

// pick does the exact opposite of omit, in the second parameter you specify which properties you want from the interface
const secondTodo: TodoPre = { title: "Study Typescript", completed: true };
