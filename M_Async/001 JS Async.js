/* << ASYNC AWAIT >>

// 1. INTRODUCTION >> 
Web dev often handles asynchronous actions - actions we can wait on while moving onto other tasks 
Requests are made to networks, database or any number of similar operations. 

JS is non-blocking: 
instead of stopping the execution of code while it waits, JS uses an efficient event-loop - 
allowing execution of other tasks while awaiting completion of these asynchronous actions. 

Originally JS used callback functions to handle asynchronous actions. 
Problem is callbacks encourage complex nested code - difficult to read, debug and scale. 

ES6 JS integrated native PROMISES which allow us to write sigfig more readable code.
ES8 provides a new syntax for handling asynchronous actions: async...await 
async...await syntax is syntactic sugar! 
Introduces not new functionality but new syntax for using promises and generators. 
BUT Improves the readability and scalability of our code so we will learn it! 
Allows asynchronous code that reads similar to traditional synchronous, imperative programs. 

-------------- */

// Codecademy Example 1 : 

// The below code shows three ways of accomplishing the same thing: 
// reading and printing from two files in a specified order
//    - the first version uses callback functions
//    - the second version uses native promise syntax
//    - the third version uses async...await

const fs = require('fs'); 
const promisifiedReadfile = require('./promisifiedReadfile');
      
// Here we use fs.readfile() and callback functions:
fs.readFile('./file.txt', 'utf-8', (err, data) => {
  if (err) throw err; // throws an exception, expression specifies the value of the exception 
  let firstSentence = data; 
  fs.readFile('./file2.txt',  'utf-8', (err, data) => {
    if (err) throw err;
    let secondSentence = data;
    console.log(firstSentence, secondSentence)
  });
});

// Here we use native promises with our "promisified" version of readfile:
let firstSentence
promisifiedReadfile('./file.txt', 'utf-8')
  .then((data) => {
    firstSentence = data;
    return promisifiedReadfile('./file2.txt', 'utf-8')
  })
  .then((data) => {
    let secondSentence = data;
    console.log(firstSentence, secondSentence)
  })
  .catch((err) => {console.log(err)});

// Here we use promisifiedReadfile() again but instead of using the native promise .then() syntax, 
// we declare and invoke an async/await function:
async function readFiles() {
  let firstSentence = await promisifiedReadfile('./file.txt', 'utf-8')
  let secondSentence = await promisifiedReadfile('./file2.txt', 'utf-8')
  console.log(firstSentence, secondSentence)
}
readFiles()

// -------------- 

// 2. THE ASYNC KEYWORD >> 

// The async keyword is used to write functions that handle asynchronous actions. 
// We wrap our asynchronous logic inside a function preprended with the async keyword. 
// Then, we invoke that function. Eg:

async function myFunc() {
};

myFunc();

// Note there are async functions declarations and async function expressions:

const myFunc = async () => {
};

myFunc();

// We can use traditional promise syntax like .then() and .catch() with async functions
// BECAUSE async functions always return a promise:
//     - if nothing returned from a function. returns a promise with resolved value 'undefined'
//     - if non-promise value returned from the function, returns promise resolved to that value
//     - if promise returned, it returns that promise. simples!

async function fivePromise() { 
  return 5;
}

fivePromise()
.then(resolvedValue => {
    console.log(resolvedValue);
  })  // Prints 5

  // Though the function returns 5, fivePromise() returns a promise with resolved value OF 5
  // As async function automatically returns a promise,
  // it does away with needing to construct promises via 'new' keyword and 'promise' constructor
 
// -------------- 

// Codecademy Exercise 2 : 

function withConstructor(num){
  return new Promise((resolve, reject) => {
    if (num === 0){
      resolve('zero');
    } else {
      resolve('not zero');
    }
  })
}

withConstructor(0)
  .then((resolveValue) => {
  console.log(` withConstructor(0) returned a promise which resolved to: ${resolveValue}.`);
})

// The above function 'withConstructor' can be written with async: 

async function withAsync(num) { 
  if (num === 0){
       return 'zero';
     } else {
       return 'not zero';
     }
   }

// calls withAsync with test number and .then() function:
withAsync(100)
   .then((resolveValue) => {
   console.log(` withAsync(100) returned a promise which resolved to: ${resolveValue}.`);
 })

// -------------- 

// 3. THE AWAIT OPERATOR >> 

// 'async' functions are almost always used with the 'await' keyword inside the function body
// 'await' is an operator: it returns the resolved value of a promise
// and can ONLY be used inside an 'async' function
// Since promises resolve in an indeterminate amount of time...
// 'await' halts/ pauses the execution of the 'async' function until a given promise is resolved

// Most situations, we're dealing with promises returned from functions
// Generally, these functions are via a library (provided in this lesson)
// We can 'await' the resolution of the promise it returns inside an 'async' function
// BASICALLY to handle the logic for a promise in a way that reads like synchronous code Eg: 

async function asyncFuncExample(){
  let resolvedValue = await myPromise(); // 'await' ensures myPromise's resolved value returns 
  console.log(resolvedValue);           // before this piece of code tries to execute 
}

asyncFuncExample(); // Prints: I am resolved now!
 
// -------------- 

// Codecademy Exercise 3 : What shall I cook? Await for it... 

// app.js >> 

const brainstormDinner = require('./library.js')


// Native promise version:
function nativePromiseDinner() {
  brainstormDinner().then((meal) => {
	  console.log(`I'm going to make ${meal} for dinner.`);
  })
}


// async/await version:
async function announceDinner() {
  // Write your code below:
  let meal = await brainstormDinner();
  console.log(`I'm going to make ${meal} for dinner.`)
}

announceDinner()
/* Output: 
I have to decide what's for dinner...
Should I make salad...?
Should I make ramen...?
Should I make eggs...?
Should I make chicken...?
I'm going to make beans for dinner.*/
 
// -------------- 

// library.js >> 

/*
brainstormDinner() returns a promise that uses a series of setTimeout() functions 
to simulate a time-consuming asynchronous action. 
Good example of "callback hell" or "the pyramid of doom," two ways people describe 
how confusing a bunch of nested callback functions can become.
(The 'timed' output of this function is really fun actually! )
*/

const brainstormDinner = () => {
  return new Promise((resolve, reject) => {
  console.log(`I have to decide what's for dinner...`)
  setTimeout(() => {
    console.log('Should I make salad...?')
    setTimeout(() => {
      console.log('Should I make ramen...?')
      setTimeout(() => {
        console.log('Should I make eggs...?')
        setTimeout(() => {
          console.log('Should I make chicken...?')
          resolve('beans')
        }, 1000)
      }, 1000)
    }, 1000)
  }, 1000)
})
}

module.exports = brainstormDinner
 
// -------------- 

// 4. WRITING ASYNC FUNCTIONS >> 

// So, the 'await' keyword halts execution of async function until a promise has settled...
// But don't forget to use the 'await' keyword! 

let myPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Yay, I resolved!')
    }, 1000);
  });
}

// This function returns a promise that resolves to 'Yay...' after 1 sec delay
// Below are two async functions that invoke myPromise() 
// showing what happens when you forget the 'await' keyword!

async function noAwait() {
  let value = myPromise(); // the function execution not paused.
  console.log(value); //  console.log() executed before the promise had resolved. 
 }

async function yesAwait() {
  let value = await myPromise(); 
  console.log(value);
 } 

 noAwait(); // Prints: Promise { <pending> } 
 yesAwait(); // Prints: Yay, I resolved!

// Also 'await' returns the resolved value of a promise
// In noAwait, value was assigned the promise object itself, instead of its resolved value. 
 
// -------------- 

// Codecademy Exercise 4 : Diary of a Bean Queen

// app.js >> 

const shopForBeans = require('./library.js');

async function getBeans() {
  console.log(`1. Heading to the store to buy beans...`);
  let value = await shopForBeans(); 
  console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
}

getBeans();

/* Output:
1. Heading to the store to buy beans...
2. I bought black beans because they were on sale.
3. Great! I'm making black beans for dinner tonight! */
 
// -------------- 

// library.js >> 

/*
shopForBeans() uses a setTimeout() to simulate a time-consuming asynchronous action. 
The function returns a promise with a resolved value of a string representing a type of bean. 
It settles on a random beanType from the beanTypes array using Math.random().
*/

const shopForBeans = () => {
  return new Promise((resolve, reject) => {
	const beanTypes = ['kidney', 'fava', 'pinto', 'black', 'garbanzo'];
  setTimeout(()=>{
    let randomIndex = Math.floor(Math.random() * 5)
    let beanType = beanTypes[randomIndex];
    console.log(`2. I bought ${beanType} beans because they were on sale.`)
   resolve(beanType);
  }, 1000)
})
}
  
module.exports = shopForBeans

// -------------- 

// 5. HANDLING DEPENDENT PROMISES >> 

