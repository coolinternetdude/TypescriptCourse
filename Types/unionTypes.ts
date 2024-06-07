// union types
let age: number | string = 21;

type Point = {
    x: number,
    y: number
}

type Loc = {
    long: number,
    lat: number
}
let coordinates: Point | Loc = { x: 1, y: 2 };

// Type narrowing 
// TypeScript won't let you perform replace on price because
function calculateTax(price: number | string, tax: number) {
    if (typeof price === "string") {
        price = parseFloat(price.replace("$", ""));
    }
    return price * tax;
}

// Union array types

const stuff: (number | string)[] = [1, 2, 4, "azerty", "wadupbikh"];

