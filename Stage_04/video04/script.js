var randomNumber = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber);
var guess = parseInt(prompt("I picked a number between 1 and 6, what is it?"));
if (guess === randomNumber) {
    alert("You guessed correct!");
} else {
    alert("Sorry, try again.");
}
