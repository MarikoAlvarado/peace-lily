var hourNow = prompt('What time is it?'); 
var greeting;

if (hourNow > 1 && hourNow < 6) {
  greeting = 'Good Afternoon!';
} else if (hourNow > 6 && hourNow < 12) {
  greeting = 'Good Evening!';
} else {
  greeting = 'What is time?!';
}

document.write(greeting);