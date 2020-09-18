'use strict'




function userNameQuestion1(){
    var userName = prompt('what is your name?');
    document.write('Welcome ' + userName);

}


function askPlantQuestion(){
    var questionAnswer=prompt('are you looking for an indoor or outdoor plant?');
document.write('sweet! read more about ' + questionAnswer + ' plants!');

}



function askForNumber(){
    var userAnswer = prompt ('guess a number between 1 and 10');
    var win = false;
    if (userAnswer === '7'){
        alert('Woohoo! Good job!')
        win = true;
    } else if(userAnswer === '8'){
        alert('Close! Try again!');

    } else if(userAnswer <='5'){
        alert('Too low! Try again!');
    
    } else if(userAnswer === '6'){
        alert('That was close! Try again!');

    } else if(userAnswer >='9'){
        alert('Too high! Try again!');
    }
    return win;
}

function playTheGame(){
    for (var i = 0; i<4; i = i + 1){
        var won = askForNumber();
        if (won){
            break;

        }
        if(won === false && i === 3){
            alert('last guess, sorry!');
        }
    }
}



var confirmAnswer = confirm('are you coming from codefellows?'); 
if (confirmAnswer){
    alert ('great! start reading!');
} else {
    alert ('bummer! check out my site anyways!');

}


var keepAsking = prompt ('do you think plants are awesome?');
while(keepAsking.toLowerCase() !='yes'){
    keepAsking = prompt('do you think plants are awesome?');
}
    
