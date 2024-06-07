function greet(person) {
    return "Hi ".concat(person);
}
function square(num) {
    return num * num;
}
function factorial(num) {
    if (num === 1)
        return 1;
    return num * factorial(num - 1);
}
console.log(factorial(4));
