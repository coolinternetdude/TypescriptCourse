const activeUsers: string[] = ["younes"];
activeUsers.push("Ahmed");

const ageList: number[] = [26, 82, 35];
ageList[0] = 25

// another fancy syntax to arrays

const bools: Array<boolean> = [true, false];
bools.push(false);

type Point = {
    x: number,
    y: number
}

const coords: Point[] = [];
coords.push({ x: 12, y: 34 });
coords.push({ x: 25, y: 15 });

// Nested arrays in typescript

const board: string[][] = [
    ["X", "O", "X"],
    ["X", "O", "X"],
    ["X", "O", "X"]
]

const demo: number[][][] = [[[1, 2]]];