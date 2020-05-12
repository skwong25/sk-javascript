// << PROMISES >>

// 1. WHAT IS A PROMISE? >> 
// Promises are objects that represent the eventual outcome of an asynchronous operation

/* A Promise object can be in one of three states:
    - Pending: The initial state - the operation has not completed yet
    - Fulfilled: The operation has completed successfully and the promise now has a 'resolved' value
                 For example, a request's promise might resolve with a JSON object as its value
    - Rejected: The operation failed and the promise has a reason for the failure (typically,Error)

If not pending, we refer to a promise as  'settled' (fulfilled or rejected)
All promises eventually settle, enabling us to write logic for what do if promise fulfills or rejects 

-------------- */

// 2. MAKING A PROMISE >> 

// Use the 'new' keyword and the 'Promise' constructor method:

const executorFunction = (resolve, reject) => {};
const myFirstPromise = new
Promise (executorFunction);

// << constructor method >> takes a function parameter 'executor function' 
// which runs automatically when the constructor is called.
// The executor function starts an asynchronous operation and dictates how the promise is settled

//  << executor function >> has two function parameters
// resolve() and reject() functions are NOT defined by the programmer
// When the 'Promise' constructor runs, JS will pass its OWN resolve() and reject() functions

// << resolve() >> is a function with one argument
// If invoked, resolve() changes the promise's status from 'pending' to 'fulfilled'
// and the promise's resolved value wll be set to the argument passed into resolve() 

//  << reject() >> is a function that takes a reason/error as argument
// If invoked, reject() will change the promises status from 'pending' to 'rejected'
// and the promises' rejection reason will be set to the argument passed into reject()

// -------------- 

// Codecademy Examples 1 : Executor Function in a 'Promise' Constructor

const executorFunction = (resolve, reject) => {
  if (someCondition) {
      resolve('I resolved!');
  } else {
      reject('I rejected!'); 
  }
}
const myFirstPromise = new Promise(executorFunction);


/* Breakdown:
1. variable 'myFirstPromise' declared
2. myFirstPromise is constructed using 'new' 'Promise()' which is the 'Promise' constructor method
3. executorFunction() is passed to the constructor and has two functions as parameters
4. if 'someCondition' evaluates 'true', then we invoke resolve() with string 'I resolved'
5. if 'false', then we invoke reject() with string 'I rejected'

In this example, myFirstPromise resolves or rejects based on a simple condition 
but, in practice, promises settle based on the results of ASYNCHRONOUS OPERATIONS
For E.g. a database request may fulfill with the data from a query or reject with error thrown */ 

// -------------- 

/* Codecademy Exercise 2 : 

(Constructing promises which resolve synchronously to better understand how they work!)
(Creating a promise representing ordering sunglasses. 

1. Create a function 'myExecutor()' Later, you'll pass this function into the 'Promise' constructor
2. 'myExecutor' has two parameters: 'resolve' and 'reject'
3. and should check if the 'sunglasses' property on the 'inventory' object has value > 0 
4. If it does, 'myExecutor()' invokes 'resolve()' with string "Sunglasses order processed."
5. If it does not, 'myExecutor()' invokes 'reject()' wth string "That item is sold out." */

const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344
};

const myExecutor = (resolve, reject) => {
if ( inventory.sunglasses > 0 ) {
  resolve("Sunglasses order processed.");
} else {
  reject("That item is sold out.");
  }
}


const orderSunglasses = () => { // STEP 6
  return new Promise (myExecutor);
}

let orderPromise = orderSunglasses(); // STEP 7

console.log(orderPromise);
// Output: Promise { 'Sunglasses order processed'}

/* 
6. Create function 'orderSunglasses()' with no parameters.
   to return a new promise constructed by passing 'myExecutor()' into the Promise constructor
7. Create a variable 'orderPromise' assigned to the return value of 'orderSunglasses' function
8. log orderPromise to the console 

// Note that CA code is now run via a bash terminal
// To run the app.js program, type 'node app.js' 

// -------------- 

// 3. NODE setTimeout() FUNCTION >> 

// Rather than constructing, we need to know how to 'consume' (use) promises ! 
// We will likely handle 'Promise' objects returned as result of an asynchronous operation.
// These promises start off pending but settle eventually.

// To simulate promises that settle after some time, function 'setTimeout()' will be used.
// setTimeout() is a Node API that uses callback functions 
// to schedule tasks to be performed after a delay
// (for now, just think of API as the medium which 2 computers communicate to one another)
//  setTimeout() has two parameters: a callback function, and delay in milliseconds. Eg: */

const delayedHello = () => {
  console.log('Hi! This is an asynchronous greeting!');
};

setTimeout(delayedHello, 2000);
// In 'at least' 2 secs, 'delayedHello()' will be invoked

// 'at least' because this delay is perform asynchronously...
// Asynchronous JS uses THE EVENT-LOOP in which
// after 2 seconds, delayedHello() is added to a line of code waiting to be run.
// Before it can run, any synchronous code from the program will run
// Next, any code in front of it in the line will run
// Thus, it might be 2 secs+ before delayedHello() is actually executed */

//  Codecademy Example 3: Using setTimeout() within Promises 

const returnPromiseFunction = () => {
  return new Promise((resolve, reject) => {
    setTimeout(( ) => {resolve('I resolved!')}, 1000);
  });
};

const prom = returnPromiseFunction();

// The above eg. declares a function that returns a Promise
// using the 'new' keyword and 'Promise' constructor
// 'Promise' takes a ('Executor') anonymous function expression as an argument 
// with 2 parameters 'resolve' and 'reject' as expected from an 'Executor'
// The function body calls the setTimeout() function with 2 parameters 
// The first argument is a function which calls resolved() with string 'I resolved!'
// The second argument is the delay in milliseconds

// the return value of returnPromiseFunction() is assigned to the Variable 'prom'
// similar to asynchronous promises in production, 'prom' will usually have 'pending' status 

//  Codecademy Example 4: Using setTimeout() - The Order of Things 

console.log("This is the first line of code in app.js.");

const usingSTO = () => {
  console.log("Any string you want");

console.log("This is the last line of code in app.js.");

// Output (node app.js):  
// The return value of usingST0() logs to console last. 

// -------------- 

/* 4. CONSUMING PROMISES >> 

We consume a promise by calling then() and catch() methods on the promise

The initial state of an asynchronous promise is 'pending' but it will settle. 
How do we tell the computer what should happen THEN?
Promise objects come with .then() method, to say
"I have a promise, when it settles, THEN here's what I want to happen..."


<< .then() >>  is a Higher-Order function
It takes two callback functions as arguments, called 'handlers'
When the promise settles, the appropriate handler will be invoked with that settled value
   - The first handler, sometimes called 'onFulfilled' is a 'success handler'
     It should contain logic for the promise resolving
   - The second handler, sometimes called 'onRejected' is a 'failure handler'
     It should contain logic for the promise rejecting
We can invoke .then() with one, both or neither handler - flexible, but tricky to debug!
If the appropriate handler is not provided, INSTEAD OF THROWING AN ERROR
.then() will return a promise with the same settled value as the promise it was called on!
Importantly, .then() always returns a promise.  

--------------  */

// 5. onFULFILLED and onREJECTED FUNCTIONS >>

// To handle a "successful" promise (a promise that resolved)
// we invoke .then() on the promise, passing in a success handler callback function. Eg:

// Creates a new Promise with a function expression passed in 
// The function expression is to resolve with string "Yay"
// This is assigned to the variable 'prom' 
const prom = new Promise((resolve, reject) => {
  resolve('Yay!');
});

// Declares a function with a single parameter, which to be logged
const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

// Calls the .then() method of the 'prom' object
// Passing in the argument of the 'handleSuccess' function
// Since prom resolves, handleSuccess() is invoked with prom‘s resolved value, 'Yay' 
// so 'Yay' is logged to the console.  
prom.then(handleSuccess); // Prints: 'Yay!'

// With typical promise consumption, we won't know whether a promise will resolve or reject
// so need to provide logic for either case
// We can pass both onFulfilled and onRejected callback to .then()

// -------------- 

//  Codecademy Example 4: Using onFulfilled() and onRejected() (success/failure handlers)  

let prom = new Promise((resolve, reject) => {
  let num = Math.random();
  if (num < .5 ){
    resolve('Yay!');
  } else {
    reject('Ohhh noooo!');
  }
});

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

const handleFailure = (rejectionReason) => {
  console.log(rejectionReason);
};

prom.then(handleSuccess, handleFailure); 

/* 
BREAKDOWN of the above code ^
A variable 'prom' is initialised with the return value of a new Promise 
The Promise takes an anonymous function expression in place of Executor function

(JS passes its own 'resolve' and reject' functions in as arguments)
(if resolved, the object will take its argument 'Yay!' as its settled value)
(if rejected, the object will takes its argument 'Ohhh noooo' as the rejection reason) 

The function body sets an 'if' condition for resolving or rejecting
invoking either the resolve() or reject() function 

The function 'handleSuccess' takes the 'resolvedValue' as an argument and logs it 

The function 'handleFailure' takes the 'rejectionReason' as an argument and logs it. 
But where are these defined? 
prom's .then() method is called, passing in success and failure handlers. 
Output is random.  */

// -------------- 

//  Codecademy Exercise 5: 

//  app.js >>

const {checkInventory} = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];

// -------------- 

//  library.js >> 

const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344
};

const checkInventory = (order) => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          let inStock = order.every(item => inventory[item[0]] >= item[1]);
          if (inStock) {
              resolve(`Thank you. Your order was successful.`);
          } else {
              reject(`We're sorry. Your order could not be completed because some items are sold out.`);
          }
      }, 1000);
  })
};

module.exports = { checkInventory };

/* Breakdown of library.js code >>
1. Creates 'inventory' object. 
2. Declares checkInventory(), that takes the array 'order' argument 
3. checkInventory() returns a new 'Promise' with setTimeout() (to simulate asynchronous function)
4. setTimeout() - first argument: function expression with .every() iterator & if...else statement
5. .every() iterator will check if every element fulfills a set conditions, returns a boolean 
6. Here, iterates through elements of the 'order' array
7. Accessing the property value in 'inventory' matching the current element's first index (order item)  
8. If greater than index[1] of the element (order quantity), inStock evaluates to 'true'
9. setTimeout() - second argument: delay of 1 second

CA's breakdown:
1. checkInventory() takes an array representing an order and returns a promise 
2. If every item is in stock, the promise resolves with value: "Thankyou. Your order was successful"
3. If not, the promise rejects with value: "We're sorry..."
4. setTimeout() is used to ensure the checkInventory() promise settles asynchronously

STEP 1 - Write success and failure handlers: 'handleSuccess()' and 'handleFailure'
         These have one parameter each, representing resolved and rejected values respectively
         Inside the bodies, log the parameters to the console
STEP 2 - Invoke 'checkInventory()' with 'order' - it will return a promise. 
         Attach a .then() function to this, pass the two handlers as callback functions. */

const handleSuccess = (resolvedValue)  => {
  console.log(resolvedValue);
}
        
const handleFailure = (rejectedValue) => {
  console.log(rejectedValue);
}
        
checkInventory().then(handleSuccess, handleFailure)
// Output: 'Thank you. Your order was successful' 

/* 
QUESTION: Why do we even need Promises?
ANSWER: They keep an eye on asynchronous callback functions - represent status and manage outcome.
As JS is a single-thread programming language, pre-ES6 callbacks were used to handle asynchronous tasks
such as network requests. Promises can help avoid 'callback hell', making code cleaner.  
Good real-world example: 
https://blog.bitsrc.io/understanding-promises-in-javascript-c5248de9ff8f */

// --------------  

/* << BRIEF INTERMISSION >> 

One way to write cleaner code is to follow the principle of 'seperation of concerns'
Seperation of Concerns means organising code into distinct sections each handling a specific task 
It enables quick navigation and honing in on problem areas 
Remember .then() returns a promise with the same settled value as the promise it was called on
if no appropriate handler is provided. 
This implementation allows us to seperate our resolved logic from our rejected logic 
Instead of passing both handlers into one .then(), chain them and both cases will be handled: */

prom
  .then((resolvedValue) => {
    console.log(resolvedValue);
  })
  .then(null, (rejectionReason) => {
    console.log(rejectionReason);
  });

// Note: Common convention is to put each part of this chain on a new line for legibility

// --------------  

// 6. Using CATCH() with Promises 

// The 'catch' function takes only argument 'onRejected'
// In case of a rejected promise, this failure handler will be invokes with the rejection reason
// .catch() accomplishes the same as .then() with only failure handler. Example:

prom
  .then((resolvedValue) => {
    console.log(resolvedValue);
  })
  .catch((rejectionReason) => {
    console.log(rejectionReason); // eradicates the 'null' passed as first argument, as above
  });

// It seems you can chain the .then() and .catch() methods onto the same function call (?!)
// Although this goes again 'seperation of concerns' :
checkInventory(order).then(handleSuccess).catch(handleFailure)

// These produce the same output:
const promise1 = examplePromise1.then(onFulfill, onReject);
const promise2 = examplePromise2.then(onFulfill).catch(onReject);

// --------------  

// 7. COMPOSITION (Chaining Multiple Promises) >>

// One common pattern with asynchronous programming is multiple operations
// which depend on one another to execute or that must be executed in a certain order
// We may make one request to the database and use data returned to make another request etc:

firstPromiseFunction()
.then((firstResolveVal) => {
  return secondPromiseFunction(firstResolveVal); // Critical! to return the second promise
})                                              // rather than the default return of a new promise
.then((secondResolveVal) => {                  // with the same settled value as the initial
  console.log(secondResolveVal);
});

// Breakdown: 
// Invokes a function 'firstPromiseFunction' that returns a Promise
// Invokes .then() with an anonymous function as the success handler 
// which invokes second function 'secondPromiseFunction()' 
// that uses the first promise's resolved value 'firstResolveVal'
// and returns a new promise. 
// Invokes a second .then() to handle logic for the second promise settling. 
// Inside that, there is a success handler that logs the second promise's resolve value. 

// -------------- 

//  Codecademy Exercise 6: 

// app.js >> 

const {checkInventory, processPayment, shipOrder} = require('./library.js');
// this is an import statement to an export.modules statement 

const order = {
  items: [['sunglasses', 1], ['bags', 2]],
  giftcardBalance: 79.82
};
// creates object with two properties. First has a value of a nested array.

checkInventory(order)
.then((resolvedValueArray) => {
 return processPayment(resolvedValueArray)
})
.then((resolvedValueArray) => {
  return shipOrder(resolvedValueArray)
})
.then((successMessage) => {
  console.log(successMessage);
})
.catch((errorMessage) => {
  console.log(errorMessage);
});
// Calls checkInventory() (returns a promise, which upon settling invokes .then())
// with a success handler of an anonymous function to call the next function
// If the chained promises resolve, it invokes a final .then() which logs final resolvedvalue 
// At any point if a promise settles as rejected, the failure handler .catch() is invoked. 

// -------------- 

//  library.js >> 

const store = {
  sunglasses: {
    inventory: 817, 
    cost: 9.99
  },
  pants: {
    inventory: 236, 
    cost: 7.99
  },
  bags: {
    inventory: 17, 
    cost: 12.99
  }
};
// creates object with three properties (item). Each of the 3 keys has a value of a nested object. 

const checkInventory = (order) => {
  return new Promise ((resolve, reject) => {
   setTimeout(()=> {  
   const itemsArr = order.items;  
   let inStock = itemsArr.every(item => store[item[0]].inventory >= item[1]);
   
   if (inStock){
     let total = 0;   
     itemsArr.forEach(item => {
       total += item[1] * store[item[0]].cost
     });
     console.log(`All of the items are in stock. The total cost of the order is ${total}.`);
     resolve([order, total]);
   } else {
     reject(`The order could not be completed because some items are sold out.`);
   }     
}, generateRandomDelay());
 });
};

// declares a function, with one parameter. The function returns a Promise. 
// The Promise takes an argument of an anonymous callback function as 'Executor'.
// The Executor pass the JS callback functions 'resolve' and 'reject' as arguments.
// The body of the Executor contains setTimeout() with a callback function as first argument.
// It's second argument passes in a callback function, to generate random millisecond delay 
// This callback function which accesses the order items as an array, saved to variable itemsArr.
// .every() callback function checks if the inventory of each order item is >+ its order quantity
// .every() returns a Boolean, saved in variable inStock,  
// 'if...else' statement: if inStock evaluates to truthy, then it works out the total price:    
// .forEach iterates through the array, increasing the total by order number and unit price
// and the Promise is fulfilled, resolve() will set its resolved value to the order and total price
// or rather, the Promise will resolve to an array
// if inStock evaluates to falsey, reject() will change the status of the Promise to rejected 
// and pass the argument given, to set as the rejection reason. 


const processPayment = (responseArray) => {
  const order = responseArray[0];
  const total = responseArray[1];
  return new Promise ((resolve, reject) => {
   setTimeout(()=> {  
   let hasEnoughMoney = order.giftcardBalance >= total;
   // For simplicity we've omited a lot of functionality
   // If we were making more realistic code, we would want to update the giftcardBalance and the inventory
   if (hasEnoughMoney) {
     console.log(`Payment processed with giftcard. Generating shipping label.`);
     let trackingNum = generateTrackingNumber();
     resolve([order, trackingNum]);
   } else {
     reject(`Cannot process order: giftcard balance was insufficient.`);
   }
   
}, generateRandomDelay());
 });
};

// declares a function with single argument 'responseArray'  
// declares temporary variables 'order' and 'total', accessing elements of responseArray via index
// returns Promise, Executor anonymous callback function expression as argument with callback functions of resolve & reject
// the Executor function runs a setTimeout function with an anonymous callback function expression
// which declares a variable hasEnoughMoney set to a Boolean (if the giftcardBalance >= total cost)
// 'if...else' statement: if evaluates to truthy, logs message, creates tracking number, invokes resolves()
// this Promise also resolves to an array - first element: order / second element: tracking number
// if falsey, invokes reject() passing argument to be set as rejection reason 

const shipOrder = (responseArray) => {
  const order = responseArray[0];
  const trackingNum = responseArray[1];
  return new Promise ((resolve, reject) => {
   setTimeout(()=> {  
     resolve(`The order has been shipped. The tracking number is: ${trackingNum}.`);
}, generateRandomDelay());
 });
};

// declares function which returns a Promise
// the Promise executor callback function is a setTimeout with first argument
// as a function expression that invokes resolve() after a randomised delay. 
// or rather, it returns a Promise that resolves to a string confirmed the order has shipped

// This function generates a random number to serve as a "tracking number" on the shipping label. In real life this wouldn't be a random number
function generateTrackingNumber() {
  return Math.floor(Math.random() * 1000000);
}

// This function generates a random number to serve as delay in a setTimeout() since real asynchrnous operations take variable amounts of time
function generateRandomDelay() {
  return Math.floor(Math.random() * 2000);
}

module.exports = {checkInventory, processPayment, shipOrder};

/* LESSON! In breakdown of code, ask yourself:
What input is it expected? What is its output? Eg: 
processPayment() expects an array argument with the order as the first element 
and the purchase total as the second. This function returns a promise. 
If there is a large enough balance on the giftcard associated with the order, 
it will resolve to an array. 
The first element in the resolved value array will be the same order 
and the second element will be a tracking number. */ 

// --------------  

//  7. Avoiding TWO Common Mistakes

// Promise composition allows for more readable code than nested callback syntax that preceded it 

// MISTAKE 1 - nesting promises instead of chaining them

returnsFirstPromise()
.then((firstResolveVal) => {
  return returnsSecondValue(firstResolveVal)
    .then((secondResolveVal) => {
      console.log(secondResolveVal);
    })
})

// The invoked function returns a Promise, which invokes .then() with a success handler 
// Inside the success handler, returnsSecondValue() is invoked with firstResolvedVal
// returning a new promise which invokes the second .then(), all within the first .then()
// Inside the second .then(), the success handler logs its resolved value. 

// Instead of a CLEAN CHAIN OF PROMISES, the logic for one is nexted inside the logic of another. 


// MISTAKE 2 - Forgetting to return a promise

returnsFirstPromise()
.then((firstResolveVal) => {
  returnsSecondValue(firstResolveVal) // promise not returned! 
})
.then((someVal) => { // thus, invoked on a promise with the same settled value as the original promise 
  console.log(someVal); // this is a problem as it won't throw an error! 
})

// --------------  

/* 8. PROMISE.ALL >>

Promise composition suits asynchronous operations that depend on each other / where execution order matters
What if we're dealing with multiple promises, and the order doesn't matter?
We can use CONCURRENCY - which is multiple asynchronous operations happening together
Enter function Promise.all() 

Promise.all() accepts an ARRAY of promises as its argument and returns a single promise
That single promise settles in one of two ways (all or nothing!):
    - If every promise in the argument resolves, the single promise returns from Promise.all()
      resolves with an array containing the resolve value from each promise 
    - If any promise rejects, the single promise from Promise.all() immediately rejects 
      with the reason that promise rejected. This behaviour is called 'failing fast' 

Example: */

let myPromises = Promise.all([returnsPromOne(), returnsPromTwo(), returnsPromThree()]);

myPromises
  .then((arrayOfValues) => {
    console.log(arrayOfValues);
  })
  .catch((rejectionReason) => {
    console.log(rejectionReason);
  });

// --------------  

//  Codecademy Exercise 7: Using Promise.all()  

//  app.js >> 

const {checkAvailability} = require('./library.js');
// we require in one function checkAvailability()

const onFulfill = (itemsArray) => {
  console.log(`Items checked: ${itemsArray}`);
  console.log(`Every item was available from the distributor. Placing order now.`);
};
const onReject = (rejectionReason) => {
	console.log(rejectionReason);
};

let checkSunglasses = checkAvailability('sunglasses', 'Favorite Supply Co.');

let checkPants = checkAvailability ('pants', 'Favorite Supply Co.');

let checkBags = checkAvailability ('bags', 'Favorite Supply Co.');

Promise.all([checkSunglasses,checkPants, checkBags])
.then(onFulfill)
.catch(onReject)
// The above creates three variables, each assigned to a seperate promise
// Promise.all() takes these promises as arguments
// We chain .then() with a success handler and .catch() with a failer handler 

//  library.js >> 

const checkAvailability = (itemName, distributorName) => {
  console.log(`Checking availability of ${itemName} at ${distributorName}...`);
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          if (restockSuccess()) {
              console.log(`${itemName} are in stock at ${distributorName}`)
              resolve(itemName);
          } else {
              reject(`Error: ${itemName} is unavailable from ${distributorName} at this time.`);
          }
      }, 1000);
  });
};

// checkavailability() expects two strings arguments - item and distributor
// It will log a processing message and return a new promise
// Within the promise's executor function, if restockSuccess is a truthy
// the promise resolves to the item as a string and logs message

module.exports = { checkAvailability };


// This is a function that returns true 80% of the time
// We're using it to simulate a request to the distributor being successful this often
function restockSuccess() {
  return (Math.random() > .2);
}

// --------------  

/* 9. REVIEW >>

- Promises are JS objects that represent the eventual result of an asynchronous operation
- Promises can be one of 3 states: pending, fulfilled or rejected 
- A promise is settled if resolved or rejected
- Construct with 'new' keyword, passing an 'executor' function to the 'Promise' constructor method: */
    const variableName = new Promise(executorFunction);
//  The executor function typically takes 2 arguments: resolve() and reject():
    const variableName = new Promise((resolve, reject) => {}); /*
- setTimeout() is a Node function - delays execution of a callback function using the event-loop
- Use .then() with a success handler callback, contains logic for what happens if promise resolves 
- Use .catch() with a failure handler callback, contains logic for what happens if promise rejects
- With promise composition, we can write complex asynchronous code (chaining.then() and catch()'s) 
  Remember to return promises constructed within .then()
  Chain promises instead of nesting promises
- Promise.all() allows concurrency 

Example question:
What output would the below return? */


let link = state => {
  return new Promise(function(resolve, reject) {
    if (state) { 
      resolve('success'); 
    } else { 
      reject('error');
    }
  });
}

let promiseChain = link(true);

promiseChain
.then( data => {  
   console.log(data + " 1");
   return link(true);
})
.then( data => {
   console.log(data+ " 2");
   return link(true);
});

// Even though the function 'link' was called THREE times 
// and THREE promises were created and settled
// The code only logged the resolve values of the FIRST TWO TIMES
// The resolved value of the THIRD promise requires .then() to handle the success outcome if needs be




