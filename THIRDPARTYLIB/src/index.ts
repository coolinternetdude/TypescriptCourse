import axios from "axios";
interface User {
    id: number;
    name: string;
    email: string;
    adress: {
        street: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
        phone: string;
        website: string;
        company:  {
            name: string;
            catchphrase: string;
            bs: string;
        }
}

axios.get<User[]>("https://jsonplaceholder.typicode.com/users/1")
.then(res => {
    const { data } = res;
    printUser(data);
}) 
.catch(err => console.log("ERROR",err.message));

function printUser(user: User[]): void {
    console.log(user[0].name);
    console.log(user[0].email);
    console.log(user[0].phone);
}

