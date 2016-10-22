var maxNum = prompt("I will print a random number between 1 and the number you give me.");
var randomNum = Math.floor(Math.random() * parseInt(maxNum) + 1);
alert(randomNum);
alert("Now I will print a random number between the next two numbers you give me.");
var minNum = prompt("This will be the minimum number.");
var maxNum = prompt("This will be the maximum number.");
var randomNum = Math.floor(Math.random() * (parseInt(maxNum) - parseInt(minNum) + 1) + parseInt(minNum));
alert(randomNum);
