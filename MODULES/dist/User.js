export default class User {
    constructor(username, password, email) {
        this.username = username;
        this.password = password;
        this.email = email;
    }
    logout() {
        console.log(`${this.username} logs out`);
    }
}
export function helperMethod() {
    console.log("HELPER METHOD");
}
