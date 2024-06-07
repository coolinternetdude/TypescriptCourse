import { add, multiply, divide } from "./utils";
import Dog from "./Dog";

const spike = new Dog("Spike", "Aussie", 2);
spike.bark();

console.log(add(5, 20345));
console.log(multiply(12, 89));
console.log(divide(89, 6));
