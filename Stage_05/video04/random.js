function getRandomNumber(upper) {
  var randomNumber = Math.floor(Math.random() * upper) + 1;
  return randomNumber;
}

/*
console.log(getRandomNumber(6));
console.log(getRandomNumber(22));
console.log(getRandomNumber(100));
console.log(getRandomNumber(700));
*/

function area(length, width, unit) {
    var area = length * width;
    return area + " " + unit;
}
console.log(area(100, 200, "square feet"));
