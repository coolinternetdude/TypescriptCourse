import type { Person } from "./types.js";
export default class User implements Person {
  constructor(
    public username: string,
    public password: string,
    public email: string
  ) {}
  logout() {
    console.log(`${this.username} logs out`);
  }
}

export function helperMethod(): void {
  console.log("HELPER METHOD");
}
