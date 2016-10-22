var secondsPerMin = 60;
var minsPerHour = 60;
var hoursPerDay = 24;
var weeksPerYear = 52;
var secondsPerDay = secondsPerMin * minsPerHour * hoursPerDay;
document.write("There are " + secondsPerDay + " seconds in a day.<br/>");
var yearsAlive = 21;
var secondsAlive = secondsPerMin * minsPerHour * hoursPerDay * weeksPerYear * yearsAlive;
document.write("I've been alive for more than" + secondsAlive + "seconds.");
