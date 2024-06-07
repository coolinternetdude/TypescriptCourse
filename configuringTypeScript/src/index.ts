interface Chicken {
    breed: string,
    eggsPerWeek: number,
    name: string
    age: number
}

const azir: Chicken = {
    breed: "shurima",
    eggsPerWeek: 1,
    name: "Azir",
    age: 3000
}

// command tsc --watch or tsc -w to activate watch mode