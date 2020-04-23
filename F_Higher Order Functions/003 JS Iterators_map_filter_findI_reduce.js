// 2  .maps() METHOD >> 
// takes an argument of a callback function and returns a new array: 

// * codecademy example 1:
// bigNumbers stores the return value of calling .map() on numbers, in a variable (new array!)
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


// 3. .filter() METHOD >> 
// after filtering out certain elements from the original array, the callback function returns true/false for each element 
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

// * codeacademy forum example 2:
// filters objects of a certain type

const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});

console.log(onlyNumbers); // prints [ 5, 3.14, 100 ]

// ----------------
  
// 4  .findIndex() METHOD >>
// returns the index of the FIRST element that EVALUATES TO TRUE in the callback function
// if none, returns -1

// REMINDER .indexOf which is an array method that finds the (first) index of a given value:
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


// 5  .reduce() METHOD >> 
// Returns a single value after iterating through an array  ('reduces' the array to one value)
// Accumulator is a running count - for numeric computation and concatenation on all elements of array. 


// * codecademy forum example 1 (showing diff accumulative functions):

const myArray = [2, 2, 2, 2];
console.log(myArray.reduce((a,b) => a + b)); // 8 
console.log(myArray.reduce((a,b) => a - b)); //-4 
console.log(myArray.reduce((a,b) => a * b)); // 16
console.log(myArray.reduce((a,b) => a / b)); // 0.25 

// ----------------

// * codecademy example 2 (showing the running count kept by accumulator):

const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {

  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue
  
}, 10);

console.log(newSum); 

/* Output: 
The value of accumulator:  10
The value of currentValue:  1
The value of accumulator:  11
The value of currentValue:  3
The value of accumulator:  14
The value of currentValue:  5
The value of accumulator:  19
The value of currentValue:  7
26 */

// ----------------

// * codecademy forum example 3 (string array)

[1,2,3,4,5,6,7].reduce((a, b) => a * b)    // 5040

array = ['A', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];
array.reduce((a, b) => a + ' ' + b)
// "A quick brown fox jumps over the lazy dog"

// ----------------

// Good article on reduce:
https://www.freecodecamp.org/news/reduce-f47a7da511a9/