// << HIGHER ORDER FUNCTIONS >>


// 1. RENAMING A FUNCTION


const announceThatIAmDoingImportantWork = () => {
  console.log("I'm doing very important work!");
}; 

// To rename this function with a shorter name, re-assign the function to a variable with a shorter name!

const busy = announceThatIAmDoingImportantWork;
busy(); // function call 

// 'busy' is a variable that holds a 'reference' to our original function
// The 'address' of both variables in memory would point to the same place 
// we re-assign 'announceThatIAmDoingImportantWork' to 'busy' without () 
// to assign the value of the function itself, not the value it returns when invoked! 

// In JS, functions are 1st class objects 
// This means, that functions, like other objects, have properties and methods
// properties such as .length .name 
// methods such as .toString()

// Forgot the name? Use:
console.log(busy.name); // output: announceThatIAmDoingImportantWork

// What's the use? Re-assigning can allow functions to be passed as parameters. eg:
// https://discuss.codecademy.com/t/what-are-other-uses-of-functions-as-data/376842


// 2. FUNCTIONS AS PARAMETERS 


// A Higher-Order Function is a function that accepts functions as parameters (callback functions)
// or returns a function (function factories) or both! 
// Note! different from a 'helper' function - when a function is called WITHIN another function body
// When you pass a function in as argument, you don't invoke it. Invoking the function evaluates to the return value of that function call. 
// With callbacks, we pass the function itself ( - ()) 
// E.g This higher-order function records the amount of time any callback function takes to run:

const timeFuncRuntime = funcParameter => {
  let t1 = Date.now();
  funcParameter();
  let t2 = Date.now();
  return t2 - t1;
}

const addOneToOne = () => 1 + 1;

timeFuncRuntime(addOneToOne);

// You can pass anonymous functions too! Eg. anonymous function that counts down 10 - 1:

timeFuncRuntime(() => {
  for (let i = 10; i>0; i--){
    console.log(i);
  }
});

// DETOUR! (extra reading)
https://medium.com/functional-javascript/higher-order-functions-78084829fff4

// --------------

// Creating closures: 
// 'A closure is created every time a function returns another function defined within it.'
// 

var showName = function() {
  var name = “FP JavaScript”
  return function() {
    console.log(name)
  }
}()
showName() //==>> FP JavaScript
console.log(name) //==>> Reference Error

// The variable 'name' is within the showName function scope
// can be accessed when the function showName is called:.

// --------------

// Function Factory FF (e.g 'add' below) is a higher order function that creates a function.
// Given a value, it creates a function, that adds a given value to a value stored in its closure.

function add(x) {
  return function(y) {
    return x + y
  }
}
var add2 = add(2)
var add3 = add(3)
add2(4) //==>> 6
add3(6) //==>> 9

// --------------


// 3. REVIEW - we covered the following: 


// Functions can be treated like data - eg reassigning them to new variables 
// Functions are 1st class objects (have properties and methods)
// Callback Functions can be passed into functions as parameters.
// A HO Function takes function as parameter or returns a function. 

