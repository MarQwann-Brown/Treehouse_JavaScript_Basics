var htmlBadges = prompt("How many HTML badges do you have?");
var cssBadges = prompt("How many CSS badges do you have?");
var javaScriptBadges = prompt("How many JavaScript badges do you have?");
var totalBadges = parseInt(htmlBadges) + parseInt(cssBadges) + parseInt(javaScriptBadges);

document.write("Wow you have " + totalBadges + " Badges!");
