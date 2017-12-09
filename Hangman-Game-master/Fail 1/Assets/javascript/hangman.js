// create an array of words
const word = ['queen', 'rock', 'pillar', 'feather', 'key', 'tribe', 'hunter', 'ice'];
// choose word randomly
let randNum = Math.floor(Math.random() * word.length);
let choosenword = word[randNum];
let underscore = [];
let rightword = [];
let wrongword = [];

//Dom manipulation

let docunderscore = document.getElementsByClassName('underscore');
let docRightguess = document.getElementByClassName('rightguess');
let docWrongguess = document.getElementByClassName('wrongquess');


//Main================================================================

//testing 

console.log(choosenword);


//create underscroces based on length of word, ES6 arrow function

let generateunderscore = () => {
 for(let i = 0; i < choosenword.length; i++) {
 	underscore.push('_');
 	//docunderscore[0].innerHTML = underscore.join(' ');
	}
	return underscore;
}
 console.log(generateunderscore());

//get users guess need an event 

document.addEventListener('keypress', (event) => {

	let keyword = String.fromCharCode(event.keyCode);
//if users guess is right 
	if(choosenword.indexof(keyword) > -1){

	//add to right word array
		rightword.push(keyword);

	//replace underscores with right letter
	underscore[choosenword.indexof(keyword)] = keyword;
	docunderscore[0].innerHTML = underscore.join(' ');
	docRightguess[0].innerHTML = rightword;




		//check if user is wright
		if(underscore.join('') == choosenword) {
			alert('You have cheated death')
		}
	}
	//users choice is wrong

	else {
		wrongword.push(keyword);

	}
});


//docunderscore[0].innerHTML = underscore.join(' ');

//generateunderscore();

 
//check if guess is right

//if right push to right array

//javascript keycoded needed event.keycode

// if wrong puch to wrong array



