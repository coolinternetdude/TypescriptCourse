// Tuples example let MyTuple: [string, number]
// const rgb: number[] = [255,0,423,321]

// Only allows three entries in an array of numbers
const color: [number, number, number] = [255, 0, 45];

type HTTPResponse = [number | string, string];

const goodRes: HTTPResponse = [200, "Ok"];
goodRes[0] = "200";

// Enums

enum OrderStatus {
    PENDING,
    DELIVERED,
    SHIPPED,
    RETURNTED
}

const myStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus): boolean {
    return status === OrderStatus.DELIVERED;
}

isDelivered(OrderStatus.PENDING);

const enum ArrowKeys {
    UP = "up",
    DOWN = "down",
    LEFT = "left",
    RIGHT = "right"
}

const statusCode = ArrowKeys.DOWN;

