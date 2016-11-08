function randomNumberGenerator(upper, lower){
    return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

console.log(randomNumberGenerator(10, 3));
console.log(randomNumberGenerator(20, 7));
console.log(randomNumberGenerator(10, 1));
console.log(randomNumberGenerator(100, 30));
