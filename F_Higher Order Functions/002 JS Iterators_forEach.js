// << INTRO TO ITERATORS (ITERATION METHODS)>>

// JS Built-in methods are alternative to 'for' loop 
// called on arrays to manipulate elements and return values
// we will learn the syntax for these methods, their return values
// how to use documentation to understand them, how to choose appropriate iterator for the task

// ----------------

// 1. .forEach() METHOD (arrays, maps and sets) - syntax and example:
// executes the same code for each element of array it iterates over

arr.forEach(callback(currentValue [, index [, array]])[, thisArg])

let arr = [1,2,3,4];
arr.forEach((e)=>{console.log(e)});
// each element is assigned to 'e' ('currentValue') on each iterative loop
// saving grace post: https://medium.com/javascript-in-plain-english/foreach-loop-in-javascript-6b19e78d655b
// note that forEach skips empty elements

// ----------------

//another example (using fat arrow notation): 

const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
}); // Outputs: prints 'Picasso is one of my favorite artists.'etc

// ----------------

// * codecademy example 1:
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

// * codecademy example 2:
groceries.forEach(groceryItem => console.log(groceryItem));

// QUESTION - is this defining an anonymous function or is it just independent forEach syntax? 
// ANSWER - compared to declaration: it is similar to declaring a function WITHOUT the functionName 
//          compared to function expression: no function keyword, no functionName, less brackets
//          the callback function in the above egs IS an anonymous function 

// FUNCTION REMINDER: 
function functionName() {} // function declaration
const variableIdentifier = () => {} // function expressions 
const variableIdentifier = function () {} // anonymous functions stored within a variable 

// ----------------

// Alternatively we can DEFINE a FUNCTION BEFOREHAND 
// * codecademy example 3:

function printGrocery(element){
  console.log(element);
}

groceries.forEach(printGrocery);

// All 3 codecademy 'groceries' egs showcase different iteration methods, but do the same thing!

// ----------------

