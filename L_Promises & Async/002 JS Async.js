/* << ASYNC AWAIT >>
'Async' indicates an asynchronous function

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

// Note async functions declaration (above) and async function expression (below):

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

/** 5. HANDLING DEPENDENT PROMISES >> 
 
 * The true beauty of async... await is when we have a series of interdependent asynchronous actions
 * Eg May make a network request based on a query to a database
 * In that case, we need to wait for results from database to make the network request 
 * With nature promise syntax, we can chain .then() functions
 * The below function uses two functions that returns promises: */

function nativePromiseVersion() { 
  returnsFirstPromise() // returns a promise with a resolved value 
  .then((firstValue) => { // .then() invoked with success handler 
      console.log(firstValue);
      return returnsSecondPromise(firstValue); // returns 2nd promise with 2nd resolved value 
  })
 .then((secondValue) => { // 2nd .then() invoked with success handler
      console.log(secondValue);
  });
}

// Here's an async function to accomplish the same thing: 
// Note that code length reduction isn't the main point,
// async...await more closely resembles asynchronous code, which helps devs maintain & debug code. 
// async...await eases storage and reference to resolved values from earlier promises in the chain 

async function asyncAwaitVersion() { // we mark our function with async
  let firstValue = await returnsFirstPromise(); // declared variable assigned with 'await' function() 
  console.log(firstValue); // 'firstValue' is assigned the resolve value of the awaited promise 
  let secondValue = await returnsSecondPromise(firstValue);
  console.log(secondValue);
 }

// -------------- 

// Codecademy Exercise 5 : Diary of a Bean Queen continued...
//  library.js >>

let soakTheBeans = (beanType) => {
  return new Promise((resolve, reject) => { // returns promise with executor function as argument 
    console.log('Time to soak the beans.')
   setTimeout(()=>{ // setTimeout simulates promises settling after a while 
     console.log(`... The ${beanType} beans are softened.`)
     resolve(true) // promise resolves with resolved value of 'true'
     }, 1000)
 })
}

let cookTheBeans = (isSoftened) => {
 return new Promise((resolve, reject) => { // returns promise with executor function as argument 
   console.log('Time to cook the beans.') 
   setTimeout(()=>{
     if (isSoftened) { // if argument evaluates to truthy (/ exists!)
       console.log('... The beans are cooked!') 
       resolve('\n\nDinner is served!') // the promise resolves with resolved value of string
     }
   }, 1000)
 })
}

 module.exports = {shopForBeans, soakTheBeans, cookTheBeans} 

//  app.js >>
// Code that handles the three dependant promises - simulates shopping, soaking and cooking the beans

const {shopForBeans, soakTheBeans, cookTheBeans} = require('./library.js');

async function makeBeans () {
  let type = await shopForBeans();
  let isSoft = await soakTheBeans(type);
  let dinner = await cookTheBeans(isSoft);
  console.log(dinner);
}

makeBeans() 
/* Output: 
I bought garbanzo beans because they were on sale.
Time to soak the beans.
... The garbanzo beans are softened.
Time to cook the beans.
... The beans are cooked!


Dinner is served!

// -------------- 

/** 6. HANDLING ERRORS >> rejected! 
 * 
 * When .catch() used in long promise chains, no indication of specifically where an error is thrown
 * This makes debugging a challenge
 * 
 * With async...await, we use try...catch statements for error handling 
 * This syntax allows us to handle errors in the same way as we do with synchronous code
 * but also we can catch both synchronous and asynchronus errors = easier debugging! */

async function usingTryCatch() {
  try {
    let resolveValue = await asyncFunction('thing that will fail');
    let secondValue = await secondAsyncFunction(resolveValue);
  } catch (err) {
    // Catches any errors in the try block
    console.log(err);
  }
 }
 
 usingTryCatch();

// Since async functions return promises we can still use native promise's .catch()
// This is sometimes used in the GLOBAL scope to catch final errors in complex code 

async function usingPromiseCatch() {
  let resolveValue = await asyncFunction('thing that will fail');
}

let rejectedPromise = usingPromiseCatch(); 
rejectedPromise.catch((rejectValue) => {
console.log(rejectValue); // failure handler 
})

// -------------- 

// Codecademy Exercise 6 : Beans Mean Stew (writing a try...catch statement)

//  library.js >>

//This function returns true 50% of the time.
let randomSuccess = () => {
  let num = Math.random();
  if (num < .5 ){
    return true;
  } else {
    return false;
  }
 };
 
 //This function returns a promise that resolves half of the time and rejects half of the time
 let cookBeanSouffle = () => {
  return new Promise((resolve, reject) => {
    console.log('Fingers crossed... Putting the Bean Souffle in the oven');
    setTimeout(()=>{
      let success = randomSuccess();
      if(success){
        resolve('Bean Souffle');
      } else {
        reject('Dinner is ruined!');
      }
    }, 1000);
  })
 };
 
 module.exports = cookBeanSouffle;
// -------------- 

//  app.js >> 

const cookBeanSouffle = require('./library.js');

async function hostDinnerParty() {
  try { 
  let variable = await cookBeanSouffle();
  console.log (`${variable} is served!`);
  } catch (error) { // the catch statement specifies an 'identifier' of error
    console.log(error);
    console.log("Ordering a pizza!");
  }
}

hostDinnerParty();
/* Output:
Fingers crossed... Putting the Bean Souffle in
the oven
Dinner is ruined!
Ordering a pizza! */

// -------------- 

/** 7. HANDLING INDEPENDENT PROMISES >> 
 * 
 * Remember that 'await' halts the execution of our 'async' function
 * This allows us to write SYNCHRONOUS-style code to handle dependent promises
 * BUT what if our async function has promises NOT dependent on results of one another to execute? */

async function waiting() {
  const firstValue = await firstAsyncThing();
  const secondValue = await secondAsyncThing();
  console.log(firstValue, secondValue);
 }
// in waiting() we pause our function until the 1st promise resolves, then we construct the second
// once the 2nd promise resolves, we print both resolved values to the console

 async function concurrent() {
  const firstPromise = firstAsyncThing();
  const secondPromise = secondAsyncThing();
 console.log(await firstPromise, await secondPromise);
 }
// in concurrent() both promises are constructed without 'await'
// We 'await' each of their resolutions to print them to console
// both promises' asynchronous operations can be run simultaneously - favourable, get to it!
// within async() functions, take advantage of CONCURRENCY to perform sync actions at same time

// NOTE! if we have multiple truly independent promises to execute fully in parallel
// we must use individual.then() functions and avoid halting execution with 'await'
 
// -------------- 

// Codecademy Exercise 6 : Now you're BEAN difficult (concurrent promises in practice)
//  library.js >>

let cookBeans = () => {
  return new Promise ((resolve, reject) => {
   setTimeout(()=>{
     resolve('beans')
   }, 1000)
 })
}

let steamBroccoli = () => {
 return new Promise ((resolve, reject) => {
   setTimeout(()=>{
     resolve('broccoli')
   }, 1000)
 })
}

let cookRice = () => {
 return new Promise ((resolve, reject) => {
   setTimeout(()=>{
     resolve('rice')
   }, 1000)
 })
}

let bakeChicken = () => {
 return new Promise ((resolve, reject) => {
   setTimeout(()=>{
     resolve('chicken')
   }, 1000)
 })
}

module.exports = {cookBeans, steamBroccoli, cookRice, bakeChicken}
 
// -------------- 

//  app.js >>

let {cookBeans, steamBroccoli, cookRice, bakeChicken} = require('./library.js')

// code below allows the 4 operations to independently construct promises & resolve (asynchronously)
async function serveDinner() {
  let vegetablePromise = steamBroccoli();
  let starchPromise =  cookRice();
  let proteinPromise = bakeChicken();
  let sidePromise = cookBeans();
  console.log(`Dinner is served. We're having ${await vegetablePromise}, ${await starchPromise}, 
  ${await proteinPromise}, and ${await sidePromise}.`)
} 
// the 'await' is used to retrieve the resolved values of resolved promises
// although this does 'halt' execution of code, this should be quick relative to the operations 

serveDinner() 
// Output: Dinner is served. We're having broccoli, rice, chicken, and beans. 

// -------------- 

/** 8. AWAIT PROMISE.ALL >>
 * (Another way to use concurrency with multiple promises to be executed simultaneously)
 * 
 * Pass an array of promises as an argument to Promise.all()
 * It returns a single promise
 * Which resolves when all promises in the argument array have resolved. 
 * The resolved value is an array containing resolved values of each promise. */

async function asyncPromAll() {
  const resultArray = await Promise.all([asyncTask1(), asyncTask2(), asyncTask3(), asyncTask4()]);
  for (let i = 0; i<resultArray.length; i++){
    console.log(resultArray[i]); 
  }
}

// In the above code, we 'await' the resolution of Promise.all()
// Promise.all() is invoked with the anrgument array of 4 promises
// Next, the loop iterates through the resultArray and logs each resolved value
// Promise.all allows us to take advantage of ASYNCHRONICITY - each tasks process concurrently
// Promise.all benefits from FAILING FAST, meaning if one rejects it won't wait for rest to finish
// As for native promises, Promise.all() is a good choice for multiple asynchronous tasks  
 
// -------------- 

// Codecademy Exercise 7 : The Same Dinner Again 
// The below code produces the same output as Exercise 6 using Promise.all() 

async function serveDinnerAgain() {
  let foodArray = await Promise.all( [steamBroccoli(), cookRice(), bakeChicken(), cookBeans()]);
  console.log(`Dinner is served. We're having 
  ${foodArray[0]}, ${foodArray[1]}, ${foodArray[2]}, and ${foodArray[3]}.`);
}

serveDinnerAgain(); 
// Output: Dinner is served. We're having broccoli, rice, chicken, and beans. 
 
// -------------- 

/** 9. REVIEW WOOP! >>
 * 
 * async...await is syntactic sugar built on native JS promises and generators
 * declare async functions with keyword 'async' 
 * inside, use the 'await' operator to pause execution of our function 
 *         to allow an asynchronous action to complete and the awaited promise to settle
 * 'await' returns the resolved value of the awaited promise
 * writing 'await' statements produces code that reads like synchronous code
 * 'try...catch' statements within 'async' functions facilitate error handling
 * take advantage of concurrency by writing 'async' functions to allow 
 *        asynchronous actions to happen whenever possible 





