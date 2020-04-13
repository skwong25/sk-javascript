/*  1   Function Declaration
A function is a reusable block of code that performs a specific task. 
Just like a variable declaration binds a value to a variable name,
a function declaration binds a function to an identifier, consisting of:
- the 'function' keyword
- followed by (identifier / functionName) and {function body}
 */

// Note that hoisting is bad practice but exists. 

/*  2  Calling a Function - Function () ;
Declaration only declares. CALLING Function executes the code. Eg: */

function sayThanks() {console.log("Thank you for your purchase! We appreciate your business."); }
// Function Declaration

sayThanks (); 
//calls the Function

/*   3   A Parameter is a named variable inside a function's block,
which will be assigned the value of the argument passed when the function is called */

// The parameter can be used as a variable within the function body:
function sayThanks(name) {
  console.log(`Thank you for your purchase! ${name} We appreciate your business.`);}

sayThanks('Cole');
// prints 'Thank you for your purchase Cole! We appreciate your business.'

//  4  Default Parameters - to account for when no argument is passed into a function.

function greeting (name = 'stranger') {
  console.log(`Hello, ${name}!`)}

greeting('Nick') // Output: Hello, Nick!
greeting() // Output: Hello, stranger!

//   5   Return allows function to produce output - otherwise default value is 'undefined'
// To return a value: 'return' keyword + return value

//  6   Helper Functions - when a function is called within another function
// Breaks down a large task in specific and smaller functions.Eg: 

function monitorCount(rows, columns) {return rows * columns;}

function costOfMonitors (rows, columns) {return monitorCount (rows, columns)*200;}

const totalCost = costOfMonitors (5, 4) 
console.log(totalCost)
// prints 4000

/* We can define functions using 'function expressions' (anonymous functions within expressions)
We can define functions using arrow function notations.
Function definition can be made more concise using concise arrow notation.
(refactored to be a concise body) 

  7  Function Expressions - to define an anonymous function within an expression
often stored within a variable. How to do this?: 
First, declare a variable - the variable's name will be the 'identifier' of your function
It is common practice to use 'const' to declare a function variable
Second, assign as that variable's value an anonymous function with 'function' keyword
followed by (parameter) and {function body}
Invoke a function expression in the same way: variableName (argument1, argument2)
Unlike function declarations, function expressions are not hoisted. Example: */

const plantNeedsWater = function (day) {
  if (day === 'Wednesday'){
    return true;
  } else { return false }
}

console.log(plantNeedsWater ('Tuesday'))
// Prints false

/*  8 Arrow Functions  - 'fat arrow' notation: () => removes need for 'function' keyword
- Write out (parameters)
- Add fat arrow => pointing to {function body} Example (the same code above re-written): */

const plantNeedsWater = (day) => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;}
  }

console.log( plantNeedsWater ('Tuesday') )
// Prints false

//  9  Concise Body Arrow Functions - most condensed way to REFACTOR arrow function syntax
// Functions that take ONE parameter do not need () Eg:

//Zero Parameters
const functionName = () => {}
// One Parameter 
const functionName = parameterOne => {}
// Two or More Parameters
const functionName = (parameterOne, parameterTwo) => {}

// Function body composed of a SINGLE line block does not need {} , and has 'implicit return'. E.g:

//Single-line block
const sumNumber = number => number + number
//Multi-line block
const sumNumber = number => {
  const sum = number + number;
  return sum;) 
}

// Example: earlier if/else statement was converted using ternary operator: 
const plantNeedsWater = (day) => {
  return day === 'Wednesday' ? true : false;
};

//below, refactored to be a concise body: 
const plantNeedsWater = day => day === 'Wednesday'? true : false; 

// Function cheat sheet: 
https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-functions/cheatsheet










