// 2  .map() ITERATOR METHOD >> 
// takes an argument of a callback function and returns a new array: 

// * codecademy example 1:
// bigNumbers stores the return value (an array) of calling .map() on numbers in a variable 
// note that the same refactoring does not apply eg implicit return without {} 

const numbers = [1, 2, 3, 4, 5]; 

const bigNumbers = numbers.map(number => {
  return number * 10;
});

console.log (numbers); // Output: [1, 2, 3, 4, 5] (unchanged)
console.log (bigNumbers); // Output: [10, 20, 30, 40, 50]

// * codeacademy forum example 2:

const squareNumbers = numbers.map(number => {
  return number * number;
});

console.log(squareNumbers); // prints [ 1, 4, 9, 16, 25 ]


// ----------------


// 3. .filter() ITERATOR METHOD >> 
// filters out elements from the original array to a given condition set by the callback function, 
// for each element that evaluates true to the condition, that element is added to a new array

var newArray = array.filter(function(item) {
  return condition;
});

// ----------------

// * codecademy example 1:
// filters strings of a certain length and below

const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 

const shortWords = words.filter(word => {
  return word.length < 6;
});

console.log(words); // Output: ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 
console.log(shortWords); // Output: ['chair', 'music', 'brick', 'pen', 'door']

// ----------------

// * codeacademy forum example 2:
// filters objects of a certain type

const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});

console.log(onlyNumbers); // prints [ 5, 3.14, 100 ]

// ----------------
  
// 4  .findIndex() ITERATOR METHOD >>
// returns the index of the FIRST element that EVALUATES TO TRUE in the callback function
// if none, returns -1

// DON'T MIX UP WITH .indexOf - array method that finds the first index of a given value:
console.log (array.indexOf(1)) // prints 0

// ----------------

// * codecademy example 1 (numbers array):

const jumbledNums = [123, 25, 78, 5, 9]; 

const lessThanTen = jumbledNums.findIndex(num => {
  return num < 10;
});

console.log(lessThanTen); // Output: 3 

// ----------------

// * codecademy example 2 (string array):

const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal => {
  return animal === "elephant";
})


console.log(animals[foundAnimal]); // output: elephant

const startsWithS = animals.findIndex (animal => {
  return animal[0] === "s";
})

console.log(startsWithS) // output: 3 (index)


// ----------------
