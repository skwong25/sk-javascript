// 2  .maps() METHOD (ITERATION METHODS)>>

// takes an argument of a callback function and returns a new array: 
// works in a similar way to .forEach() except .map() returns a NEW ARRAY.

const squareNumbers = numbers.map(number => {
  return number * number;
});

console.log(squareNumbers); // prints [ 1, 4, 9, 16, 25 ]

// ----------------

// * codecademy example 1:
// bigNumbers stores the return value of calling .map() on numbers, in a variable (new array!)
// note that the same refactoring does not apply eg implicit return without {} 

const numbers = [1, 2, 3, 4, 5]; 

const bigNumbers = numbers.map(number => {
  return number * 10;
});

console.log (numbers); // Output: [1, 2, 3, 4, 5] (unchanged)
console.log (bigNumbers); // Output: [10, 20, 30, 40, 50]


// ----------------

// 3. .filter() METHOD - syntax and examples:
// like .map(), .filter() returns a new array 
// after filtering out certain elements from the original array
// the callback function returns true or false for each element 
// for each element that returns true, that element is added to a new array

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

// another example 1:
// filters objects of a certain type

const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});

console.log(onlyNumbers); // prints [ 5, 3.14, 100 ]

// ----------------
