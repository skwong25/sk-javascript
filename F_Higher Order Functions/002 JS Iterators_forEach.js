// << INTRO TO ITERATORS (ITERATION METHODS)>>

// JS Built-in methods are alternative to 'for' loops
// called on arrays to manipulate elements and return values
// we will learn the syntax for these methods, their return values
// how to use documentation to understand them, how to choose appropriate iterator for the task

// ----------------

// 1. .forEach() METHOD (arrays, maps and sets): 
// executes the same code for each element of array it iterates over

arr.forEach(callback(currentValue [, index [, array]])[, thisArg])

let arr = [1,2,3,4];
arr.forEach((e)=>{console.log(e)});
// each element is assigned to 'e' ('currentValue') on each iterative loop
// saving grace post: https://medium.com/javascript-in-plain-english/foreach-loop-in-javascript-6b19e78d655b
// returns undefined. .forEach() skips empty elements.

// ----------------

//another example (using fat arrow notation): 

const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
}); // Outputs: prints 'Picasso is one of my favorite artists.'etc

// ----------------
 
// All 3 codecademy 'groceries' egs showcase different iteration methods, but do the same thing!
// * codecademy example 1 (using a function expression):
let groceries = [ "brown sugar", "salt", "cranberres", "walnuts"]

groceries.forEach(function(groceryItem){
  console.log( " - " + groceryItem);
})

// groceries.forEach() calls the forEach method on the groceries array
//.forEach is the 'iterator'
//.forEach takes an argument of a callback function
// a callback function is a function passed as an argument into another function
//.forEach loops through the array and executes the callback function for each element
// the return value for .forEach is always undefined
// we can also pass a callback for .forEach() using fat arrow notation (used in ES6):

// ----------------

// * codecademy example 2 (using an arrow function):
groceries.forEach(groceryItem => console.log(groceryItem));

// ----------------

// * codecademy example 3 (using a pre-defined function):
function printGrocery(element){
  console.log(element);
}

groceries.forEach(printGrocery);

// ----------------

// FUNCTION REMINDER: 
function functionName() {} // function declaration
const variableIdentifier = () => {} // arrow function  
const variableIdentifier = function () {} // 'literal' function, stored within a variable 

// ----------------

// Codecademy forum has broken down the translation from a literal function into the syntax we have seen
// It seems that the parameter for .reduce() has been PREDEFINED as to accept a function 
// (so no need for 'function' keyword)

array.reduce(callback)

// The callback can be a literal function: 

array.reduce(function (a, b) {
  return a + b;
})

// OR fat arrow function:

iterable.reduce(f(a, b) => {
  return a + b;
})

// refactored down to a concise body arrow function: 

iterable.reduce((a, b) => a + b)

// OR pre-defined function 

a_add_b = (a, b) => a + b;

iterable.reduce(a_add_b)

// ----------------

