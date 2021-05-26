'use strict';
let travil = prompt('Do you think i like to travil ?');
switch (travil.toLowerCase()) {
    case 'yes':
    case 'y':
        //console.log('thats right i do like traviling');  
        alert('thats right i do like traviling')
        break;
    case 'no':
    case 'n':
        //console.log('thats not right! travil is the life')
        alert('thats not right! travil is the life');
}
let age = prompt('Do you think im older than 27 years ?');
switch (age.toLowerCase()) {
    case 'yes':
    case 'y':
        //console.log('thats not right , im 26');  
        alert('thats not right , im 26')
        break;
    case 'no':
    case 'n':
        //console.log('thats right ')
        alert('thats right');
}
let home = prompt('Do you think i live in amman ?');
switch (home.toLowerCase()) {
    case 'yes':
    case 'y':
        //console.log('thats right , i live in Amman ');  
        alert('thats right , i live in Amman')
        break;
    case 'no':
    case 'n':
        //console.log('thats not right!')
        alert('thats not right!');
}
let tall = prompt('Do you think im taller than 180 cm ?');
switch (tall.toLowerCase()) {
    case 'yes':
    case 'y':
        //console.log('thats right');  
        alert('thats right ')
        break;
    case 'no':
    case 'n':
        //console.log('thats not right!')
        alert('thats not right!');
}
let major = prompt('Do you think my major is Computer science ?');
switch (major.toLowerCase()) {
    case 'yes':
    case 'y':
        //console.log('thats not right');  
        alert('thats not right ')
        break;
    case 'no':
    case 'n':
        //console.log('thats right < my major is civil enginner !')
        alert('thats right < my major is civil enginner !');
}


let score = 0;
let guessNumber = null;
for (let x = 0; x < 4; x++) {

    let guessNumber = prompt('guess a number How far is LTUC from my home in km')
    guessNumber = Number(guessNumber);

    if (guessNumber === 30) {
        score++;
        alert('The number is correct');
        break;
    } else if (guessNumber < 30) {
        alert('you are too low , try again')
    } else if (guessNumber > 30) {
        alert('you are too high , try again')
    } if (x === 3) {
        alert('you lost , the answer is 30');
    }
}

let favCity = ['newyork', 'chicago', 'boston', 'maine'];

for (let i = 0; i < 6; i++) {
    let user = prompt('Guess one of my favourite city !');
    if (favCity[0] === user || favCity[1] === user || favCity[2] === user || favCity[4] === user) {
        alert('correct answer');
        score++
        break;
    }
    if (i === 4) {
        alert('you lost , the answer is (newyork, chicago , boston , maine) ');
        break;
    }
}