var hourNow = prompt('What time is it? 1-12'); 
var greeting;

if (hourNow > 1 && hourNow < 6) {
  greeting = 'Good Afternoon!';
} else if (hourNow > 6 && hourNow < 12) {
  greeting = 'Good Evening!';
} else {
  greeting = 'Something went wrong!';
}

document.write(greeting);