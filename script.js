var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Dobry Wieczor!';
} else if (hourNow > 12) {
   
} else if (hourNow > 0) {
    greeting = 'Dzien Dobry!';
} else {
    greeting = 'Welcome!';
}

document.write('<h3>' + greeting + '</h3>');
