const clientId = 'VW51J3F4RW3ZB5YUXHQJ3ZTTMT34OKRN44PBZ0UOEWCIA2NY';
const clientSecret = 'HIRLSFM35V4CUODEAMMYL2P41WQOXVJC1T3R5ZPSAFSVISG5';
const url = 'https://api.foursquare.com/v2/venues/explore?near=';
// const endpoint = `${url}?client_id=${clientId}&client_secret=${clientSecret}&near=`

// OpenWeather Info
const openWeatherKey = '32a363628aa6898d038e0dececa04bc7';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Randomising Functions

// 1. Math.random
//  Example:

let dishArr = [{},{},{}]
 let random = Math.random() * dishArr.length; 
    let x = Math.floor(random)
    let randomDish = dishArr[x];


// --------------


// 2. Chance: returns true 50% of the time.
// We can use this to write functions that resolve/reject half the time 
let randomSuccess = () => {
    let num = Math.random();
    if (num < .5 ){
      return true;
    } else {
      return false;
    }
   };


// --------------


// 3. Check to see if input is valid - one of 4 predefined values. 
// Else if statement: 

let userInput = 'BOMB';
let userChoice = userInput.toLowerCase();

const getUserChoice = function (userChoice) {
  if (userChoice === 'rock'){
    userChoice = userChoice;
  } else if (userInput === 'scissors') {
    userChoice = userChoice;
  } else if (userInput === 'paper') {
    userChoice = userChoice;
  } else if (userInput === 'bomb') {
    userChoice = userChoice;
  } else {
    userChoice = 'input invalid'
  }
  }

// Iterator .some() :   

let values = ['rock','scissors','paper','bomb']

let checkIt = () => {
  let check = values.some(item => {
  return item === userChoice; // could remove the curly brackets for implicit return
  }) 
  
  if (check) {console.log (`Player1: ${userChoice}`)
} else {console.log (`Invalid input`);}
}

checkIt() 


// --------------


// 4. Randomised Choice - generate a random number and convert it to a corresponding value:

function getNumber () {return Math.floor(Math.random()*3)}
let randomNumber = getNumber()
// Note alternative is 'let randomNumber =  Math.floor(Math.random()*3)' 
// Incorporating within a function allows flex to generate multiple times 

// Conversion: Else if statement: 

const convertNumber = randomNumber => {
  if (randomNumber === 0){
    return 'rock'; // originally 'choice = 'rock' etc 
    // 'choice' mysteriously did not need variable declaration but since its bad practice 
  } else if (randomNumber === 1) { // replaced with 'return',saved the function call to a variable 
    return 'paper'; 
  } else {
    return 'scissors';
  }
  }

let choice = convertNumber (randomNumber);
console.log(choice);

// Conversion: Array & iterator:

let chosenValue = values[randomNumber]
console.log(chosenValue);


// --------------


// 5. Nested Loop to check a nested array for value, returns the nested index position
 

function checkTen (array, value) {
  for (let a = 0; a < array.length; a++) {
      for (let b = 0; b < 2; b++) {
      if (array[a][b] === value) {
          console.log (`Index position of ${value} is [${a}][${b}]`); 
          return true;
      }  
  } 
  } console.log ("Not present"); return false;  
}


// --------------


// 6. A nested 'for' loop to check the position of given coordinates within an array  

var arr = [[2,3],[5,8],[1,1],[0,9],[5,7]];
var coor1 = [0, 9];
var coor2 = [1, 2];

function isItemInArray(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i][0] == item[0] && array[i][1] == item[1]) {
            return true;   // Found it
        }
    }
    return false;   // Not found
}

if (!isItemInArray(arr, [x, y])) {
   arr.push([x, y]);
}  // Optional, to add to array. 

